import React from 'react';
import {ProgressBar} from "react-bootstrap";

export default function ExamSimulationPoints() {
  const now = 60;

  return (
         <ProgressBar now={now} label={`${now}pkt`} />
  );
}

