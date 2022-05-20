import React from 'react';
import {Table} from "react-bootstrap";

export default function TableExam({standard, ageCategories}) {

    let index1 = 0;
    let index2 = 0;
    let index3 = 0;
    let index4 = 0;
    let index5 = 0;
    let index6 = 0;
    let index7 = 0;
    let index8 = 0;
    let index9 = 0;
    const tableElements = standard.map((standard) =>
        <tr>
           <td>{standard}</td>
           <td>{ageCategories.age_do20[index1++]}</td>
            <td>{ageCategories.age21_25[index2++]}</td>
            <td>{ageCategories.age26_30[index3++]}</td>
            <td>{ageCategories.age31_35[index4++]}</td>
            <td>{ageCategories.age36_40[index5++]}</td>
            <td>{ageCategories.age41_45[index6++]}</td>
            <td>{ageCategories.age46_50[index7++]}</td>
            <td>{ageCategories.age51_55[index8++]}</td>
            <td>{ageCategories.age_po55[index9++]}</td>
        </tr>
    );

  return (
        <Table striped bordered hover size="sm">
          <thead>
          <tr>
            <th>#</th>
            <th>do 20</th>
            <th>21-25</th>
            <th>26-30</th>
            <th>31-35</th>
            <th>36-40</th>
            <th>41-45</th>
            <th>46-50</th>
            <th>51-55</th>
            <th>56-pow.</th>
          </tr>
          </thead>
          <tbody>
          {tableElements}
          </tbody>
        </Table>
  );
}
