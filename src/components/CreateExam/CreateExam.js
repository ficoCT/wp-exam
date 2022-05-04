import React, {useState} from 'react';
import CreateExamForm from "../CreateExamForm";
import Mark from "../Mark";
import Disciplines from "../Disciplines";
import FavoriteDiscipline from "../FavoriteDiscipline";
import {Button} from "react-bootstrap";
import Exam from "../Exam";

export default function CreateExam() {

    const item = [<CreateExamForm />, <Mark />, <Disciplines />, <FavoriteDiscipline />];
    const [itemNumber, setItemNumber] = useState(0);

    const handlePrevious = () => setItemNumber(prevItemNumber => prevItemNumber - 1);
    const handleNext = () => setItemNumber(prevItemNumber => prevItemNumber + 1);

  return (
     <>
         {item[itemNumber]}
         <Button variant="primary" disabled={itemNumber===0} onClick={() => handlePrevious()}>Cofnij</Button>
         <Button variant="primary" disabled={itemNumber===item.length} onClick={() => handleNext()}>Dalej</Button>

         {itemNumber===item.length ? <Exam /> : null}
     </>
  );
}
