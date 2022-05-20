import React, {useEffect, useState} from 'react';
import { getFirestore, collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { app } from '../../firebase';
import {Container, Table} from "react-bootstrap";

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
      <>
        <Container>
          <ul>{listExams}</ul>
          <Table striped bordered hover size="sm">
            <thead>
            <tr>
              <th>#</th>
              <th>Rok</th>
              <th>Ocena</th>
              <th>Dyscypliny</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>2022</td>
              <td>5</td>
              <td>push-ups, envelope run, sit-ups</td>
            </tr>
            </tbody>
          </Table>
        </Container>
      </>
  );
}
