import React, {useState} from 'react';
import CreateExamForm from "../CreateExamForm";
import Mark from "../Mark";
import Disciplines from "../Disciplines/Mark";
import FavoriteDiscipline from "../FavoriteDiscipline";
import {Button} from "react-bootstrap";

export default function CreateExam() {

    const item = [<CreateExamForm />, <Mark />, <Disciplines />, <FavoriteDiscipline />];
    const [itemNumber, setItemNumber] = useState(0);

    const handlePrevious = (e) => setItemNumber(prevItemNumber => prevItemNumber - 1);
    const handleNext = () => setItemNumber(prevItemNumber => prevItemNumber + 1);

  return (
     <>
         {item[itemNumber]}
         <Button variant="primary" disabled={itemNumber===0} onClick={e => handlePrevious(e)}>Cofnij</Button>
         <Button variant="primary" disabled={itemNumber===item.length-1} onClick={() => handleNext()}>Dalej</Button>
     </>
  );
}
