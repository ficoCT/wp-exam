import React, {useState} from 'react';
import {Button, ProgressBar} from "react-bootstrap";
import './ExamSimulationDisciplinePoints.scss';

export default function ExamSimulationDisciplinePoints({disciplines, points, results, onChangePoints}) {

    function handlePointsButtonClick(name, value) {
        if (typeof onChangePoints !== 'function') return;
        onChangePoints(name, value);
    }

  return (
      <>
        <span className="title">{disciplines.discipline1 === 'running' ? 'Bieganie' : 'Pływanie'}</span>{' '}{results.discipline1results}
        <div className="progressBarContainer">
        <Button className="me-1" variant="warning" onClick={() => handlePointsButtonClick('discipline1points', -0.4)}>-</Button>
            <ProgressBar className="me-1 bar" now={points.discipline1points} label={`${points.discipline1points}${' '}pkt`} />
        <Button className="mx-1" variant="success" onClick={() => handlePointsButtonClick('discipline1points', 0.4)}>+</Button>
        </div>
          <span className="title">{disciplines.discipline2 === 'pullUps' ? 'Podciąganie na drążku' : 'Pompki'}</span>{' '}{results.discipline2results}
          <div className="progressBarContainer">
              <Button className="me-1" variant="warning" onClick={() => handlePointsButtonClick('discipline2points', -0.8)}>-</Button>
              <ProgressBar className="me-1 bar" now={points.discipline2points} label={`${points.discipline2points}${' '}pkt`} />
              <Button className="mx-1" variant="success" onClick={() => handlePointsButtonClick('discipline2points', 0.8)}>+</Button>
          </div>
          <span className="title">{disciplines.discipline3 === 'running10x10' ? 'Bieg 10x10' : 'Bieg koperta'}</span>{' '}{results.discipline3results}
          <div className="progressBarContainer">
              <Button className="me-1" variant="warning" onClick={() => handlePointsButtonClick('discipline3points', -0.8)}>-</Button>
              <ProgressBar className="me-1 bar" now={points.discipline3points} label={`${points.discipline3points}${' '}pkt`} />
              <Button className="mx-1" variant="success" onClick={() => handlePointsButtonClick('discipline3points', 0.8)}>+</Button>
          </div>
          <span className="title">Brzuszki</span>{' '}{results.discipline4results}
          <div className="progressBarContainer">
              <Button className="me-1" variant="warning" onClick={() => handlePointsButtonClick('discipline2points', -0.8)}>-</Button>
              <ProgressBar className="me-1 bar" now={points.discipline3points} label={`${points.discipline3points}${' '}pkt`} />
              <Button className="mx-1" variant="success" onClick={() => handlePointsButtonClick('discipline2points', 0.8)}>+</Button>
          </div>
      </>
  );
}
