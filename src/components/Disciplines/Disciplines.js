import React from 'react';
import {Button, Card} from "react-bootstrap";

export default function Disciplines() {

  return (
      <Card>
        <Card.Header>Wybierz dyscyplinę</Card.Header>
        <Card.Body>
            <Button variant="secondary">Bieg 3000</Button>
            <Button variant="secondary">Pływanie</Button>
            <Button variant="secondary">Podciąganie na drążku</Button>
            <Button variant="secondary">Pompki</Button>
            <Button variant="secondary">Bieg 10x10</Button>
            <Button variant="secondary">Bieg koperta</Button>
        </Card.Body>
      </Card>
  );
}
