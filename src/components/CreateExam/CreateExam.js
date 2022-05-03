import React from 'react';
import CreateExamForm from "../CreateExamForm";
import Mark from "../Mark";
import Disciplines from "../Disciplines/Mark";
import FavoriteDiscipline from "../FavoriteDiscipline";

export default function CreateExam() {

  return (
     <>
       <CreateExamForm />
       <Mark />
       <Disciplines />
       <FavoriteDiscipline />

     </>
  );
}
