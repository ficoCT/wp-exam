import React, {useState, useEffect} from 'react';
import CreateExamForm from "../CreateExamForm";
import Mark from "../Mark";
import Disciplines from "../Disciplines";
import FavoriteDiscipline from "../FavoriteDiscipline";
import {Button, Container} from "react-bootstrap";
import Exam from "../Exam";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {app} from "../../firebase";

export default function CreateExam() {
    const [itemNumber, setItemNumber] = useState(0);
    const [dataPerson, setDataPerson] = useState({});
    const [mark, setMark] = useState(0);
    const [disciplines, setDisciplines] = useState({});
    const [standards, setStandards] = useState([]);
    const db = getFirestore(app);

    function giveDataPerson(person) {
        let date = new Date();
        let year = date.getFullYear() - person.year;
        let ageGroup = '';
        if(year<=20) ageGroup = 'age_do20';
        if(year>=21 && year<=25) ageGroup = 'age21_25';
        if(year>=31 && year<=35) ageGroup = 'age31_35';
        if(year>=36 && year<=40) ageGroup = 'age36_40';
        if(year>=41 && year<=45) ageGroup = 'age41_45';
        if(year>=46 && year<=50) ageGroup = 'age46_50';
        if(year>=51 && year<=55) ageGroup = 'age51_55';
        if(year>=56) ageGroup = 'age_po55';
        person.group = ageGroup;
        console.log('dataPerson CreateExam', person);
        setDataPerson(person);
    }

    function giveGrade(grade) {
        console.log('mark CreateExam', grade);
        setMark(grade);
    }

    function giveDisciplines(discipline1, discipline2, discipline3) {
        console.log('disciplines', discipline1, discipline2, discipline3);
        setDisciplines({discipline1, discipline2, discipline3});
    }

    function giveFavoriteDisciplines() {

    }

    async function getMyExamResults(db) {
        const exam = collection(db, 'exam');
        const examSnapshot = await getDocs(exam);
        const examList = examSnapshot.docs.map(doc => doc.data());
        return examList;
    }

    useEffect(() => {
        getMyExamResults(db).then(categoryStandards => setStandards(categoryStandards));
    },[]);

    const item = [<CreateExamForm onSetDataPerson={giveDataPerson}/>, <Mark onSetMark={giveGrade}/>, <Disciplines onSetDisciplines={giveDisciplines}/>, <FavoriteDiscipline favoriteDisciplines={giveFavoriteDisciplines}/>];

    const handlePrevious = () => setItemNumber(prevItemNumber => prevItemNumber - 1);
    const handleNext = () => setItemNumber(prevItemNumber => prevItemNumber + 1);

  return (
      <Container>
         {item[itemNumber]}
         <Button className="m-2"variant="primary" disabled={itemNumber===0} onClick={() => handlePrevious()}>Cofnij</Button>
         <Button className="m-2"variant="primary" disabled={itemNumber===item.length} onClick={() => handleNext()}>Dalej</Button>

         {itemNumber===item.length ? <Exam dataPerson={dataPerson} mark={mark} disciplines={disciplines} standards={standards}/> : null}
          </Container>
  );
}
