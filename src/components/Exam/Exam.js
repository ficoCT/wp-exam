import React, {useEffect, useState} from 'react';
import ExamResults from "../ExamResults";
import ExamChart from "../ ExamChart";
import ExamSimulation from "../ ExamSimulation";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import {app} from "../../firebase";

export default function Exam({dataPerson, mark, disciplines}) {

    const [points, setPoints] = useState([]);
    const db = getFirestore(app);

    console.log('dataPerson', dataPerson.categories);
    console.log('mark', mark);
    console.log('disciplines', disciplines);

    async function getMyExam(db) {
        const category = collection(db, `category${dataPerson.categories}`);
        const categorySnapshot = await getDocs(category);
        const categoryPoints = categorySnapshot.docs.map(doc => doc.data());
        return categoryPoints;
    }

    useEffect(() => {
        getMyExam(db).then(categoryPoints => setPoints(categoryPoints));
    },[]);

    return (
        <>
            <ExamResults points={points}/>
            <ExamChart disciplines={disciplines}/>
            <ExamSimulation />
        </>
    );
}