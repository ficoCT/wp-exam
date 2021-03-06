import React, {useEffect, useState} from 'react';
import { getFirestore, collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { app } from '../../firebase';
import {Container, Table} from "react-bootstrap";

export default function Admin() {

  const [everyoneExam, setEveryoneExam] = useState([]);
  const db = getFirestore(app);

  async function getMyExam(db) {

    const citiesRef = collection(db, "exam");
    await setDoc(doc(citiesRef, "a_standard"), {
      running: [12, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
                13, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
                14, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
                15, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
                16, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
        17, 17.05, 17.1, 17.15, 17.2, 17.25, 17.3, 17.35, 17.4, 17.45, 17.5, 17.55, 17.6, 17.65, 17.7, 17.75, 17.8, 17.85, 17.9, 17.95,
        18, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
        19, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
        20, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
        21, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
        22, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
        23, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
        24, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
        25, 12.05, 12.1, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95,
        26],
      swimming: [650, 645, 640, 635, 630, 625, 12.15, 12.2, 12.25, 12.3, 12.35, 12.4, 12.45, 12.5, 12.55, 12.6, 12.65, 12.7, 12.75, 12.8, 12.85, 12.9, 12.95],
      pullUps: [18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
    });
    await setDoc(doc(citiesRef, "b_running_male"), {
      age_do20: [0, 0, 0, 0, 0, 0, 44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
      39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
      29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
      19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
      9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age21_25: [ 44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age26_30: [0, 0, 0,  44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age31_35: [0, 0, 0, 0, 0, 0, 44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age36_40: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,  44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age41_45: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age46_50: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age51_55: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age_po55: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1]
    });
    await setDoc(doc(citiesRef, "c_swimming_male"), {
      age_do20: [0, 0, 0, 0, 0, 0, 44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age21_25: [ 44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age26_30: [0, 0, 0,  44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age31_35: [0, 0, 0, 0, 0, 0, 44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age36_40: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,  44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age41_45: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age46_50: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age51_55: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1],
      age_po55: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  44, 43.6, 43.2, 42.8, 42.4, 42, 41.6, 41.2, 40.8, 40.4, 40,
        39.6, 39.2, 38.8, 38.4, 38, 37.6, 37.2, 36.8, 36.4, 36, 35.6, 35.2, 34.8, 34.4, 34, 33.6, 33.2, 32.8, 32.4, 32, 31.6, 31.2, 30.8, 30.4, 30,
        29.6, 29.2, 28.8, 28.4, 28, 27.6, 27.2, 26.8, 26.4, 26, 25.6, 25.2, 24.8, 24.4, 24, 23.6, 23.2, 22.8, 22.4, 22, 21.6, 21.2, 20.8, 20.4, 20,
        19.6, 19.2, 18.8, 18.4, 18, 17.6, 17.2, 16.8, 16.4, 16, 15.6, 15.2, 14.8, 14.4, 14, 13.6, 13.2, 12.8, 12.4, 12, 11.6, 11.2, 10.8, 10.4, 10,
        9.6, 9.2, 8.8, 8.4, 8, 7.6, 7.2, 6.8, 6.4, 6, 5.6, 5.2, 4.8, 4.4, 4, 3.6, 3.2, 2.8, 2.4, 2, 1.6, 1.2, 0.8, 0.4, 0.1]
    });
    await setDoc(doc(citiesRef, "d_pullUps_male"), {
      age_do20: [0, 0, 0, 21, 20.2, 19.4, 18.6, 17.8, 17, 16.2, 15.4, 14.6, 13.8, 13, 12.2, 11.4, 10.6, 9.8],
      age21_25: [21, 20.2, 19.4, 18.6, 17.8, 17, 16.2, 15.4, 14.6, 13.8, 13, 12.2, 11.4, 10.6, 9.8, 9.0, 8.2, 7.4],
      age26_30: [0, 0, 21, 20.2, 19.4, 18.6, 17.8, 17, 16.2, 15.4, 14.6, 13.8, 13, 12.2, 11.4, 10.6, 9.8, 9.0],
      age31_35: [0, 0, 0, 0, 21, 20.2, 19.4, 18.6, 17.8, 17, 16.2, 15.4, 14.6, 13.8, 13, 12.2, 11.4, 10.6],
      age36_40: [0, 0, 0, 0, 0, 0, 21, 20.2, 19.4, 18.6, 17.8, 17, 16.2, 15.4, 14.6, 13.8, 13, 12.2],
      age41_45: [0, 0, 0, 0, 0, 0, 0, 0, 21, 20.2, 19.4, 18.6, 17.8, 17, 16.2, 15.4, 14.6, 13.8],
      age46_50: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 20.2, 19.4, 18.6, 17.8, 17, 16.2, 15.4],
      age51_55: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 20.2, 19.4, 18.6, 17.8, 17, 16.2],
      age_po55: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 20.2, 19.4, 18.6, 17.8, 17]
    });

    const exam = collection(db, 'exam');
    const examSnapshot = await getDocs(exam);
    const everyoneExam = examSnapshot.docs.map(doc => doc.data());
    return everyoneExam;
  }

  useEffect(() => {
    getMyExam(db).then(exam => setEveryoneExam(exam));
  },[]);

  return (
      <>
        <Container>
          Dane za??adowane do bazy ...
        </Container>
      </>
  );
}
