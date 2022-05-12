import React from 'react';
import {Button, Card} from "react-bootstrap";

export default function FavoriteDiscipline(onSetFavoriteDisciplines) {

    const favoriteDisciplines = {};

    function handleFavoriteDisciplinesButtonClick(favoriteDisciplines) {
        if (typeof onSetFavoriteDisciplines !== 'function') return;
        onSetFavoriteDisciplines(favoriteDisciplines);
    }

  return (
      <Card>
        <Card.Header>Dyscyplina wiodąca</Card.Header>
        <Card.Body>
            <Button className="m-2" variant="secondary">Bieg 3000</Button>
            <Button className="m-2" variant="secondary">Pływanie</Button>
            <Button className="m-2" variant="secondary">Podciąganie na drążku</Button>
            <Button className="m-2" variant="secondary">Pompki</Button>
            <Button className="m-2" variant="secondary">Bieg 10x10</Button>
            <Button className="m-2" variant="secondary">Bieg koperta</Button>
            <Button className="m-2" variant="secondary">NIE MA ZNACZENIA</Button>
        </Card.Body>
      </Card>
  );
}
