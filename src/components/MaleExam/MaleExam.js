import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import {collection, doc, getDocs, getFirestore, setDoc} from "firebase/firestore";
import {app} from "../../firebase";
import TableExam from "../TableExam";

export default function MaleExam() {

    const [exam, setExam] = useState([]);
    const db = getFirestore(app);

    async function getMyExam(db) {
        const exam = collection(db, 'exam');
        const examSnapshot = await getDocs(exam);
        const examData = examSnapshot.docs.map(doc => doc.data());
        return examData;
    }

    useEffect(() => {
        getMyExam(db).then(examData => setExam(examData));
    },[]);

  return (
      <Container>
      {exam.length ?
          <TableExam standard={exam[0].running} ageCategories={exam[1]}/>
      : 'Ładuje się ...'}
      </Container>
  );
}
