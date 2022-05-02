import * as React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <div>
            <h1>Egzamin z Wychowania Fizycznego</h1>
            <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
                <Link to="/exam">exam</Link> |{' '}
                <Link to="/famale-exam">famale-exam</Link> {' '}
                <Link to="/male-exam">male-exam</Link>
                <Link to="/expenses">Expenses</Link>
            </nav>
        </div>
    );
}


// import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Exam from "./components/Exam";
// import MaleExam from "./components/MaleExam";
// import FemaleExam from "./components/FemaleExam";
//
// function App() {
//     return (
//         <Router>
//             <div>
//                 <ul>
//                     <li><Link to="/">Egzamin</Link></li>
//                     <li><Link to="/about">Egzamin kobiety</Link></li>
//                     <li><Link to="/topics">Egzamin mężczyźni</Link></li>
//                     <li><Link to="/topics">Symulacja egzaminu</Link></li>
//                 </ul>
//
//                 <hr />
//
//                 <Route exact path="/" component={Exam} />
//                 <Route path="/about" component={MaleExam} />
//                 <Route path="/topics" component={FemaleExam} />
//             </div>
//         </Router>
//     );
// }
//
// export default App;

