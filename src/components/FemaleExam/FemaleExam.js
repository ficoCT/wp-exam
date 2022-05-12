import React from 'react';
import {Container, Table} from "react-bootstrap";
import EveryoneExam from "../EveryoneExam";

export default function FemaleExam() {

  return (
      <Container>
          <Table striped bordered hover size="sm">
              <thead>
              <tr>
                  <th>#</th>
                  <th>FemaleExam</th>
                  <th>FemaleExam</th>
                  <th>FemaleExam</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
              </tr>
              </tbody>
          </Table>
      </Container>
  );
}
