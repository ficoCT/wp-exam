import React from 'react';
import {Button, Card, ListGroup} from "react-bootstrap";

export default function ExamResults({disciplines, points, results}) {

  console.log('results.discipline2results',results.discipline2results);

  return (
      <Card className="m-3">
        <Card.Header>Wyniki egzaminu</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>{disciplines.discipline1} {' '} {results.discipline1results} {' '} {points.discipline1points}</ListGroup.Item>
            <ListGroup.Item>{disciplines.discipline2} {' '} {results.discipline2results} {' '} {points.discipline2points}</ListGroup.Item>
            <ListGroup.Item>Brzuszki</ListGroup.Item>
            <ListGroup.Item>Bieg 10x10</ListGroup.Item>
          </ListGroup>
          SUMA<Button className="m-2" variant="primary">99</Button>
          OCENA<Button className="m-2" variant="success">5</Button>
        </Card.Body>
      </Card>
  );
}
