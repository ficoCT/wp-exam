import React from 'react';
import {Button, Card, ListGroup} from "react-bootstrap";

export default function ExamResults({disciplines, points, results}) {

  let now = points.discipline1points + points.discipline2points + points.discipline3points;
  now = Number(now.toFixed(1))

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
          SUMA<Button className="m-2" variant="primary">{now}</Button>
          OCENA<Button className="m-2" variant="success">5</Button>
        </Card.Body>
      </Card>
  );
}
