import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {Button, Card, ListGroup} from "react-bootstrap";

export default function ExamChart({disciplines}) {

  const labels = ['', '', '', 'Brzuszki'];
  labels[0] = disciplines.discipline1 === 'running' ? 'Bieganie' : 'Pływanie';
  labels[1] = disciplines.discipline2 === 'pullUps' ? 'Podciąganie na drążku' : 'Pompki';
  labels[2] = disciplines.discipline3 === 'running10x10' ? 'Bieg 10x10' : 'Bieg koperta';

  ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        // position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Dyscypliny',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Mój wynik',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#ff8c00',
      },
      {
        label: 'Wynik maksymalny',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: '#006600',
      },
    ],
  };

  return (
      <Card className="m-3">
        <Card.Header>Porównanie z maksymalnym wynikiem</Card.Header>
        <Card.Body>
          <Bar options={options} data={data} />
        </Card.Body>
      </Card>
  );
}
