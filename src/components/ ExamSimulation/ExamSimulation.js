import React from 'react';
import ExamSimulationDisciplinePoints from "../ExamSimulationDisciplinesPoints";
import ExamSimulationPoints from "../ExamSimulationPoints";
import {Card} from "react-bootstrap";
import './ExamSimulation.scss';

export default function ExamSimulation({disciplines, points, results, onChangePoints}) {

  return (
    <Card className="m-3">
        <Card.Header className="examSimulationHeader">Symulacja egzaminu</Card.Header>
        <Card.Body>
            <ExamSimulationPoints points={points}/>
            <ExamSimulationDisciplinePoints disciplines={disciplines} points={points} results={results} onChangePoints={onChangePoints}/>
        </Card.Body>
    </Card>
  );
}
