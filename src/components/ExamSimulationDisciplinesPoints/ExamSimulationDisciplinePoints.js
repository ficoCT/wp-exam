import React, {useState} from 'react';
import {Button, ProgressBar} from "react-bootstrap";
import './ExamSimulationDisciplinePoints.scss';

export default function ExamSimulationDisciplinePoints({disciplines, points, results, onChangePoints}) {

  let now = 60;
    const [changePoints, setChangePoints] = useState({discipline1points: 0, discipline2points: 0, discipline3points: 0, discipline4points: 0});

    function handlePointsButtonClick(name, value) {
        if (typeof onChangePoints !== 'function') return;
        onChangePoints(name, value);
    }

  return (
      <>
        <span className="title">{disciplines.discipline1}{' '}{results.discipline1results}</span>
        <div className="progressBarContainer">
        <Button className="me-1" variant="warning" onClick={() => handlePointsButtonClick('discipline1points', -1)}>-</Button>
            <ProgressBar className="me-1" now={points.discipline1points} label={`${points.discipline1points}pkt`} />
        <Button className="mx-1" variant="success" onClick={() => handlePointsButtonClick('discipline1points', 1)}>+</Button></div>
        <span className="title">Podciąganie na drążku</span>
        <div className="progressBarContainer"> <Button variant="warning">-</Button><ProgressBar now={now} label={`${now}pkt`} /><Button variant="success">+</Button></div><span className="title">Brzuszki</span>
        <div className="progressBarContainer"> <Button variant="warning">-</Button><ProgressBar now={now} label={`${now}pkt`} /><Button variant="success">+</Button></div>
        <span className="title">Bieg 10x10</span>
        <div className="progressBarContainer"><Button variant="warning">-</Button><ProgressBar now={now} label={`${now}pkt`} /><Button variant="success">+</Button></div>
      </>
  );
}
