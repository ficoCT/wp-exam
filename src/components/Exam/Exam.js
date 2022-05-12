import React from 'react';
import ExamResults from "../ExamResults";
import ExamChart from "../ ExamChart";
import ExamSimulation from "../ ExamSimulation";

export default function Exam({dataPerson, mark, disciplines}) {

    console.log('dataPerson', dataPerson);
    console.log('mark', mark);
    console.log('disciplines', disciplines);

    return (
        <>
            <ExamResults />
            <ExamChart disciplines={disciplines}/>
            <ExamSimulation />
        </>
    );
}