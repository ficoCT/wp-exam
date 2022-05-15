import React from 'react';
import {Button, ProgressBar} from "react-bootstrap";
import './ExamSimulationDisciplinePoints.scss';

export default function ExamSimulationDisciplinePoints() {
  const now = 60;

  return (
      <>
        <span className="title">Bieg 3000</span>
        <div className="progressBarContainer">
        <Button className="me-1" variant="warning">-</Button><ProgressBar className="me-1" now={now} label={`${now}pkt`} /><Button className="mx-1" variant="success">+</Button></div>
        <span className="title">Podciąganie na drążku</span>
        <div className="progressBarContainer"> <Button variant="warning">-</Button><ProgressBar now={now} label={`${now}pkt`} /><Button variant="success">+</Button></div><span className="title">Brzuszki</span>
        <div className="progressBarContainer"> <Button variant="warning">-</Button><ProgressBar now={now} label={`${now}pkt`} /><Button variant="success">+</Button></div>
        <span className="title">Bieg 10x10</span>
        <div className="progressBarContainer"><Button variant="warning">-</Button><ProgressBar now={now} label={`${now}pkt`} /><Button variant="success">+</Button></div>
      </>
  );
}
