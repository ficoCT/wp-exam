import React, {useEffect, useState} from 'react';
import ExamResults from "../ExamResults";
import ExamChart from "../ ExamChart";
import ExamSimulation from "../ ExamSimulation";
// import {getFirestore, doc, collection, query, where, getDoc, getDocs} from "firebase/firestore";
// import {app} from "../../firebase";

export default function Exam({dataPerson, mark, disciplines, standards}) {

    const [points, setPoints] = useState({discipline1: 0, discipline2: 0, discipline3: 0});
    const [results, setResults] = useState({discipline1: 0, discipline2: 0, discipline3: 0});

    function setResult(discipline, nameDiscipline, nrTab1, nrTab2, ageGroup, point) {
        let dis = discipline === nameDiscipline ? nrTab1 : nrTab2;
        let index = standards[dis][`${ageGroup}`].indexOf(point);
        return standards[0][`${dis}`][index];
    }

    function setPointsA() {
        let date = new Date();
        let year = date.getFullYear() - dataPerson.year;
        console.log(year);
        let ageGroup = '';
        if(year<=20) ageGroup = 'age_do20';
        if(year>=21 && year<=25) ageGroup = 'age21_25';
        if(year>=26 && year<=30) ageGroup = 'age26_30';
        if(year>=31 && year<=35) ageGroup = 'age31_35';
        if(year>=36 && year<=40) ageGroup = 'age36_40';
        if(year>=41 && year<=45) ageGroup = 'age41_45';
        if(year>=46 && year<=50) ageGroup = 'age46_50';
        if(year>=51 && year<=55) ageGroup = 'age51_55';
        if(year>=56)ageGroup = 'age_po55';

        if(mark===5) {
            let index;
            let dis = disciplines.discipline1 === 'running' ? 1 : 2;
            if (mark === 5) { index = standards[dis][`${ageGroup}`].indexOf(38)};
            let resultDiscipline1 = standards[0][`${disciplines.discipline1}`][index];
        }
        let point = 38;
        let wynik = setResult(disciplines.discipline1, 'running', 1, 2, ageGroup, point);
        console.log('wynik', wynik);
    }

    useEffect(() => {
        setPointsA();
    },[]);

    return (
        <>
            <ExamResults disciplines={disciplines} points={points} results={results}/>
            <ExamChart disciplines={disciplines}/>
            <ExamSimulation />
        </>
    );
}