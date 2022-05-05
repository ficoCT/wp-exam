import React from 'react';
import {Button, ProgressBar} from "react-bootstrap";

export default function ExamSimulationDisciplinePoints() {
  const now = 60;

  return (
      <>
        Bieg 3000
        <Button variant="warning">-</Button><ProgressBar now={now} label={`${now}pkt`} /><Button variant="success">+</Button>
        Podciąganie na drążku
        <Button variant="warning">-</Button><ProgressBar now={now} label={`${now}pkt`} /><Button variant="success">+</Button>
        Brzuszki
        <Button variant="warning">-</Button><ProgressBar now={now} label={`${now}pkt`} /><Button variant="success">+</Button>
        Bieg 10x10
        <Button variant="warning">-</Button><ProgressBar now={now} label={`${now}pkt`} /><Button variant="success">+</Button>
      </>
  );
}
