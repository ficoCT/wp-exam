import React from 'react';
import {Button, Card, ListGroup} from "react-bootstrap";
import './ExamResults.scss';

export default function ExamResults({disciplines, points, results}) {

  let now = points.discipline1points + points.discipline2points + points.discipline3points;
  now = Number(now.toFixed(1))

  return (
      <Card className="m-3">
        <Card.Header className="examResultsHeader">Wyniki egzaminu</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="examResultsItem">
                <span className="examResultsItem__discipline">{disciplines.discipline1 === 'running' ? 'Bieganie' : 'Pływanie'}</span>
                <span>
                 {results.discipline1results}  {' - '}
                 {points.discipline1points}
                </span>
            </ListGroup.Item >
            <ListGroup.Item className="examResultsItem">
                <span className="examResultsItem__discipline">{disciplines.discipline2 === 'pullUps' ? 'Podciąganie na drążku' : 'Pompki'}</span>
                    <span>{results.discipline2results} {' - '}
                    {points.discipline2points}</span>
            </ListGroup.Item>
            <ListGroup.Item className="examResultsItem">
            <span className="examResultsItem__discipline">Bieg 10x10</span>
                <span>21.4
                    {' - '}
                28</span>
            </ListGroup.Item>
              <ListGroup.Item className="examResultsItem">
                  <span className="examResultsItem__discipline">Brzuszki</span>
                  <span>23
                      {' - '}
                  21</span>
              </ListGroup.Item>
          </ListGroup>
            <div className="examResultsButtons">
          <span>SUMA<Button className="m-2" variant="primary">{now}</Button></span>
                <span>OCENA<Button className="m-2" variant="success">5</Button></span>
            </div>
        </Card.Body>
      </Card>
  );
}
