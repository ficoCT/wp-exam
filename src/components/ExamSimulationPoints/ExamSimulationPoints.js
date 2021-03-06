import React from 'react';
import {ProgressBar} from "react-bootstrap";
import './ExamSimulationPoints.scss';

export default function ExamSimulationPoints({points}) {
  let now = points.discipline1points + points.discipline2points + points.discipline3points;
  now = Number(now.toFixed(1))

  return (
         <ProgressBar className="progressBar" now={now} label={`${now}pkt`} />
  );
}

