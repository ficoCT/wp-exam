import React, {useEffect, useState} from 'react';
import ExamResults from "../ExamResults";
import ExamChart from "../ ExamChart";
import ExamSimulation from "../ ExamSimulation";

export default function Exam({dataPerson, mark, disciplines, standards}) {

    const [results, setResults] = useState({discipline1results: 0, discipline2results: 0, discipline3results: 0, discipline4results: 0});
    const [points, setPoints] = useState({discipline1points: 0, discipline2points: 0, discipline3points: 0, discipline4points: 0});
    const [maxResults, setMaxResults] = useState({discipline1maxResults: 0, discipline2maxResults: 0, discipline3maxResults: 0, discipline4maxResults: 0});
    const [maxPoints, setMaxPoints] = useState({discipline1maxPoints: 0, discipline2maxPoints: 0, discipline3maxPoints: 0, discipline4maxPoints: 0});

    function setResult(discipline, name, nrDiscipline, nrTab1, nrTab2, point) {
        let dis = discipline === name ? nrTab1 : nrTab2;
        let index = standards[dis][`${dataPerson.group}`].indexOf(point);
        let res = standards[0][`${discipline}`][index];
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

    function DisciplinePoints() {

        let point1 = 0;
        let point2 = 0;
        let maxPoint = 0;
        switch (mark) {
            case 5:
                point1 = 38;
                point2 = 20.2;
                break;
        }
        setResult(disciplines.discipline1,'running', 1, 1, 2, point1);
        setResult(disciplines.discipline2,'pullUps', 2, 3, 4, point2);
        setMaxDisciplinePoints(dataPerson.group);
    }

    function onChangePoints(name, value) {
        let onChangeValue = points[`${name}`] + value;
        onChangeValue = Number(onChangeValue.toFixed(1));
        setPoints(points => ({ ...points, [`${name}`]: onChangeValue}));
        if(name === 'discipline1points') setResult(disciplines.discipline1,'running', 1, 1, 2, onChangeValue);
        if(name === 'discipline2points') setResult(disciplines.discipline2,'pullUps', 2, 3, 4, onChangeValue);
    }

    useEffect(() => {
        DisciplinePoints();
    },[]);

    return (
        <>
            <ExamResults disciplines={disciplines} points={points} results={results} />
            <ExamChart disciplines={disciplines} points={points} maxPoints={maxPoints}/>
            <ExamSimulation disciplines={disciplines} points={points} results={results} onChangePoints={onChangePoints}/>
        </>
    );
}