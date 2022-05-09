import React from 'react';
import ExamResults from "../ExamResults";
import ExamChart from "../ ExamChart";
import ExamSimulation from "../ ExamSimulation";

export default function Exam() {

    return (
        <>
            <ExamResults />
            <ExamChart />
            <ExamSimulation />
        </>
    );
}