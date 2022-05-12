import React, {useState} from 'react';
import CreateExamForm from "../CreateExamForm";
import Mark from "../Mark";
import Disciplines from "../Disciplines";
import FavoriteDiscipline from "../FavoriteDiscipline";
import {Button, Container} from "react-bootstrap";
import Exam from "../Exam";

export default function CreateExam() {
    const [itemNumber, setItemNumber] = useState(0);
    const [dataPerson, setDataPerson] = useState({});
    const [mark, setMark] = useState(0);

    function giveDataPerson(person) {
        console.log('dataPerson CreateExam', person);
        setDataPerson(person);
    }

    function giveGrade(grade) {
        console.log('mark CreateExam', grade);
        setMark(grade);
    }

    function giveDisciplines(discipline1, discipline2, discipline3) {
        console.log('disciplines', discipline1, discipline2, discipline3);
    }

    function giveFavoriteDisciplines() {

    }

    const item = [<CreateExamForm onSetDataPerson={giveDataPerson}/>, <Mark onSetMark={giveGrade}/>, <Disciplines onSetDisciplines={giveDisciplines}/>, <FavoriteDiscipline favoriteDisciplines={giveFavoriteDisciplines}/>];

    const handlePrevious = () => setItemNumber(prevItemNumber => prevItemNumber - 1);
    const handleNext = () => setItemNumber(prevItemNumber => prevItemNumber + 1);

  return (
      <Container>
         {item[itemNumber]}
         <Button className="m-2"variant="primary" disabled={itemNumber===0} onClick={() => handlePrevious()}>Cofnij</Button>
         <Button className="m-2"variant="primary" disabled={itemNumber===item.length} onClick={() => handleNext()}>Dalej</Button>

         {itemNumber===item.length ? <Exam /> : null}
          </Container>
  );
}
