import React, {useState} from 'react';
import {Card, Form} from "react-bootstrap";

export default function CreateExamForm(onSetDataPerson) {

  const [dataPerson, setDataPerson] = useState({sex:'', year:'',category:''});

  const handleDataPersonChange = (e) => {
    const { name, value } = e.target;
    setDataPerson(values => ({ ...values, [name]: value }));
    console.log(dataPerson);
    if (typeof onSetDataPerson !== 'function') return;
    onSetDataPerson(dataPerson);
  };

  return (
      <Card>
        <Card.Header>Wprowadź swoje dane</Card.Header>
        <Card.Body>
          <Form>
          <Form.Select className="mb-2" aria-label="Default select example" name="sex" value={dataPerson.sex} onChange={handleDataPersonChange}>
            <option>Podaj płeć</option>
            <option value="K">Kobieta</option>
            <option value="M">Mężczyzna</option>
          </Form.Select>
          <Form.Select className="mb-2" aria-label="Default select example" name="year" value={dataPerson.year} onChange={handleDataPersonChange}>
            <option>Rok urodzenia</option>
            <option value="1982">1982</option>
            <option value="1983">1983</option>
            <option value="1984">1984</option>
            <option value="1985">1985</option>
            <option value="1986">1986</option>
            <option value="1987">1987</option>
            <option value="1988">1988</option>
            <option value="1989">1989</option>
          </Form.Select>
          <Form.Select className="mb-2" aria-label="Default select example" name="category" value={dataPerson.category} onChange={handleDataPersonChange}>
            <option>Kategoria</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Form.Select>
          </Form>
        </Card.Body>
      </Card>
  );
}
