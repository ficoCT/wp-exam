import React from 'react';
import ExamSimulationDisciplinePoints from "../ExamSimulationDisciplinesPoints";
import ExamSimulationPoints from "../ExamSimulationPoints";
import {Card} from "react-bootstrap";

export default function ExamSimulation() {

  return (
    <Card className="m-3">
        <Card.Header>Symulacja egzaminu</Card.Header>
        <Card.Body>
            <ExamSimulationPoints />
            <ExamSimulationDisciplinePoints />
        </Card.Body>
    </Card>
  );
}
