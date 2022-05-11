import React from 'react';
import {Button, Card} from "react-bootstrap";

export default function Disciplines(onSetDisciplines) {

    const disciplines = {};

    function handleDisciplinesButtonClick(disciplines) {
        if (typeof onSetDisciplines !== 'function') return;
        onSetDisciplines(disciplines);
    }

  return (
      <Card>
        <Card.Header>Wybierz dyscyplinę</Card.Header>
        <Card.Body>
            <Button className="m-2" variant="secondary">Bieg 3000</Button>
            <Button className="m-2" variant="secondary">Pływanie</Button>
            <Button className="m-2" variant="secondary">Podciąganie na drążku</Button>
            <Button className="m-2" variant="secondary">Pompki</Button>
            <Button className="m-2" variant="secondary">Bieg 10x10</Button>
            <Button className="m-2" variant="secondary">Bieg koperta</Button>
        </Card.Body>
      </Card>
  );
}
