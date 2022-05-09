import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Exam from "./components/Exam";
import FemaleExam from "./components/FemaleExam";
import MaleExam from "./components/MaleExam";
import CreateExam from "./components/CreateExam";
import EveryoneExam from "./components/EveryoneExam";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="everyone-exam" element={<EveryoneExam />} />
                    <Route path="famale-exam" element={<FemaleExam />} />
                    <Route path="male-exam" element={<MaleExam />} />
                    <Route path="create-exam" element={<CreateExam />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);