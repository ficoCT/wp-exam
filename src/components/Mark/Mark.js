import React from 'react';
import {Button, Card} from "react-bootstrap";

export default function Mark({onSetMark}) {

  function handleMarkButtonClick(mark) {
    if (typeof onSetMark !== 'function') return;
    onSetMark(mark);
  }

  return (
  <Card>
    <Card.Header>Ocena</Card.Header>
    <Card.Body>
      <Button variant="danger" onClick={() => handleMarkButtonClick(3)}>3</Button>{' '}
      <Button variant="warning" onClick={() => handleMarkButtonClick(4)}>4</Button>{' '}
      <Button variant="success" onClick={() => handleMarkButtonClick(5)}>5</Button>{' '}
    </Card.Body>
  </Card>
  );
}
