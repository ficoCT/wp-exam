import React from 'react';
import ExamSimulationDisciplinePoints from "../ExamSimulationDisciplinesPoints";
import ExamSimulationPoints from "../ExamSimulationPoints";
import {Card} from "react-bootstrap";

export default function ExamSimulation() {

  return (
    <Card>
        <Card.Header>Symulacja egzaminu</Card.Header>
        <Card.Body>
            <ExamSimulationPoints />
            <ExamSimulationDisciplinePoints />
        </Card.Body>
    </Card>
  );
}
