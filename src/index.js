import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import MyExam from "./components/MyExam";
import FemaleExam from "./components/FemaleExam";
import MaleExam from "./components/MaleExam";
import { auth } from './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} >
                  <Route path="exam" element={<MyExam />} />
                  <Route path="famale-exam" element={<FemaleExam />} />
                  <Route path="male-exam" element={<MaleExam />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
