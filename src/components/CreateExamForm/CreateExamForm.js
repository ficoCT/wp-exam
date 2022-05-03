import React from 'react';
import {Card, Form, Button} from "react-bootstrap";

export default function CreateExamForm() {

  return (
      <Card>
        <Card.Header>Wprowadź swoje dane</Card.Header>
        <Card.Body>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Button variant="primary">Cofnij</Button>
          <Button variant="primary">Dalej</Button>
        </Card.Body>
      </Card>
  );
}
