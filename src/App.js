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

