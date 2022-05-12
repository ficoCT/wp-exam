import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";

export default function Disciplines({onSetDisciplines}) {

  const [discipline1, setDiscipline1] = useState('running');
  const [discipline2, setDiscipline2] = useState('pullUps');
  const [discipline3, setDiscipline3] = useState('running10x10');

  const handleDiscipline1 = () => setDiscipline1(prevDiscipline1 => prevDiscipline1 === 'running' ? 'swimming' : 'running' );
  const handleDiscipline2 = () => setDiscipline2(prevDiscipline2 => prevDiscipline2 === 'pullUps' ? 'pushUps' : 'pullUps' );
  const handleDiscipline3 = () => setDiscipline3(prevDiscipline3 => prevDiscipline3 === 'running10x10' ? 'runningEnvelope' : 'running10x10' );

    function handleDiscipline(event) {
        if (typeof onSetDisciplines !== 'function') return;
        onSetDisciplines(discipline1, discipline2, discipline3);
    }

  return (
      <Card>
        <Card.Header>Wybierz dyscyplinę</Card.Header>
        <Card.Body>
            <Button className="m-2" variant={discipline1 === 'running' ? 'primary' : 'secondary'} onClick={() => handleDiscipline1()}>Bieg 3000</Button>
            <Button className="m-2" variant={discipline1 === 'swimming' ? 'primary' : 'secondary'} onClick={() => handleDiscipline1()}>Pływanie</Button>
            <Button className="m-2" variant={discipline2 === 'pullUps' ? 'primary' : 'secondary'} onClick={() => handleDiscipline2()}>Podciąganie na drążku</Button>
            <Button className="m-2" variant={discipline2 === 'pushUps' ? 'primary' : 'secondary'} onClick={() => handleDiscipline2()}>Pompki</Button>
            <Button className="m-2" variant={discipline3 === 'running10x10' ? 'primary' : 'secondary'} onClick={() => handleDiscipline3()}>Bieg 10x10</Button>
            <Button className="m-2" variant={discipline3 === 'runningEnvelope' ? 'primary' : 'secondary'} onClick={() => handleDiscipline3()}>Bieg koperta</Button>
        </Card.Body>
        <Button className="m-2"variant="primary" onClick={() => handleDiscipline()}>Zatwierdz</Button>
      </Card>
  );
}
