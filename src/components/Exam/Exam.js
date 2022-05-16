import React, {useEffect, useState} from 'react';
import ExamResults from "../ExamResults";
import ExamChart from "../ ExamChart";
import ExamSimulation from "../ ExamSimulation";
// import {getFirestore, doc, collection, query, where, getDoc, getDocs} from "firebase/firestore";
// import {app} from "../../firebase";

export default function Exam({dataPerson, mark, disciplines, standards}) {

    const [points, setPoints] = useState({discipline1points: 0, discipline2points: 0, discipline3points: 0});
    const [results, setResults] = useState({discipline1results: 0, discipline2results: 0, discipline3results: 0});

    function setResult(discipline, nrTab1, nrTab2, ageGroup, point) {
        let dis = disciplines.discipline1 === 'running' ? nrTab1 : nrTab2;
        let index = standards[dis][`${ageGroup}`].indexOf(point);
        return standards[0][`${disciplines.discipline1}`][index];
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

        let points1 = 0;
        let points2 = 0;
        switch (mark) {
            case 5:
                points1 = 38;
                points2 = 20;
                break;
        }
        let res1 = setResult(disciplines.discipline1, 1, 2, ageGroup, points1);
        let res2 = setResult(disciplines.discipline2, 3, 4, ageGroup, points2);
        setResults(results => ({ ...results, discipline1results: res1}));
        setPoints(points => ({ ...points, discipline1points: points1}));
    }

    function onChangePoints(name, value) {
        let result = points[`${name}`] + value;
        setPoints(points => ({ ...points, [`${name}`]: result}));
    }

    useEffect(() => {
        setPointsA();
    },[]);

    return (
        <>
            <ExamResults disciplines={disciplines} points={points} results={results} />
            <ExamChart disciplines={disciplines} points={points} />
            <ExamSimulation disciplines={disciplines} points={points} results={results} onChangePoints={onChangePoints}/>
        </>
    );
}