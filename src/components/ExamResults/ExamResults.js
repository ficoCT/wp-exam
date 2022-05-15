import React from 'react';
import {Button, Card, ListGroup} from "react-bootstrap";

export default function ExamResults({points}) {

  console.log('points', points);

  return (
      <Card className="m-3">
        <Card.Header>Wyniki egzaminu</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Bieganie</ListGroup.Item>
            <ListGroup.Item>Podciąganie</ListGroup.Item>
            <ListGroup.Item>Brzuszki</ListGroup.Item>
            <ListGroup.Item>Bieg 10x10</ListGroup.Item>
          </ListGroup>
          SUMA<Button className="m-2" variant="primary">99</Button>
          OCENA<Button className="m-2" variant="success">5</Button>
        </Card.Body>
      </Card>
  );
}
