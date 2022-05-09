import React from 'react';
import {Button, Card} from "react-bootstrap";

export default function FavoriteDiscipline() {

  return (
      <Card>
        <Card.Header>Dyscyplina wiodąca</Card.Header>
        <Card.Body>
            <Button variant="secondary">Bieg 3000</Button>
            <Button variant="secondary">Pływanie</Button>
            <Button variant="secondary">Podciąganie na drążku</Button>
            <Button variant="secondary">Pompki</Button>
            <Button variant="secondary">Bieg 10x10</Button>
            <Button variant="secondary">Bieg koperta</Button>
            <Button variant="secondary">NIE MA ZNACZENIA</Button>
        </Card.Body>
      </Card>
  );
}
