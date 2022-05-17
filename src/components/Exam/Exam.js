import React, {useEffect, useState} from 'react';
import ExamResults from "../ExamResults";
import ExamChart from "../ ExamChart";
import ExamSimulation from "../ ExamSimulation";
// import {getFirestore, doc, collection, query, where, getDoc, getDocs} from "firebase/firestore";
// import {app} from "../../firebase";

export default function Exam({dataPerson, mark, disciplines, standards}) {

    const [results, setResults] = useState({discipline1results: 0, discipline2results: 0, discipline3results: 0});
    const [points, setPoints] = useState({discipline1points: 0, discipline2points: 0, discipline3points: 0});
    const [maxResults, setMaxResults] = useState({discipline1maxResults: 0, discipline2maxResults: 0, discipline3maxResults: 0});
    const [maxPoints, setMaxPoints] = useState({discipline1maxPoints: 0, discipline2maxPoints: 0, discipline3maxPoints: 0});

    function setResult(discipline, name, nrDiscipline, nrTab1, nrTab2, ageGroup, point) {
        let dis = discipline === name ? nrTab1 : nrTab2;
        let index = standards[dis][`${ageGroup}`].indexOf(point);
        console.log('index', index);
        let res = standards[0][`${discipline}`][index];
        console.log('res ', res );
        setResults(results => ({ ...results, [`discipline${nrDiscipline}results`]: res}));
        setPoints(points => ({ ...points, [`discipline${nrDiscipline}points`]: point}));
    }

    function setMaxDisciplinePoints(ageGroup) {
        let maxPoint = {d1:0, d2:0, d3:0, d4:0}
        if(mark === 5) maxPoint = {d1:44, d2:21, d3:19, d4:16}

        let dis1 = disciplines.discipline1 === 'running' ? 1 : 2;
        let index = standards[dis1][`${ageGroup}`].indexOf(maxPoint.d1);
        let res1 = standards[0][disciplines.discipline1][index];
        setMaxResults(results => ({ ...results, discipline1maxResults: res1}));
        setMaxPoints(points => ({ ...points, discipline1maxPoints: maxPoint.d1}));
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

        let point1 = 0;
        let point2 = 0;
        let maxPoint = 0;
        switch (mark) {
            case 5:
                point1 = 38;
                point2 = 20.2;
                break;
        }
        setResult(disciplines.discipline1,'running', 1, 1, 2, ageGroup, point1);
        setResult(disciplines.discipline2,'pullUps', 2, 3, 4, ageGroup, point2);
        setMaxDisciplinePoints(ageGroup);
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
            <ExamChart disciplines={disciplines} points={points} maxPoints={maxPoints}/>
            <ExamSimulation disciplines={disciplines} points={points} results={results} onChangePoints={onChangePoints}/>
        </>
    );
}