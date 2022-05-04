import React from 'react';
import {Button, Card} from "react-bootstrap";

export default function Mark() {

  return (
  <Card>
    <Card.Header>Ocena</Card.Header>
    <Card.Body>
      <Button variant="danger">3</Button>{' '}
      <Button variant="warning">4</Button>{' '}
      <Button variant="success">5</Button>{' '}
    </Card.Body>
  </Card>
  );
}
