import React, {useEffect, useState} from 'react';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { app } from '../../firebase';

export default function MyExam() {

  const [examList, setExamList] = useState([]);
  const db = getFirestore(app);
  const listExams = examList.map((exam) =>
      <li key={exam.year}>
        {exam.grade} {' '}
        {exam.year} {' '}
        {exam.sportsCompetitions}
      </li>
  );

  async function getMyExam(db) {
    const myExam = collection(db, 'myExam');
    const myExamSnapshot = await getDocs(myExam);
    const myExamList = myExamSnapshot.docs.map(doc => doc.data());
    return myExamList;
  }

  useEffect(() => {
    getMyExam(db).then(myExamList => setExamList(myExamList));
  },[]);

  return (
      <>  <ul>{listExams}</ul></>
  );
}
