import React, {useEffect, useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import LoginLogoutForm from './components/Form';
import { auth } from './firebase';

export default function App() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user);
                localStorage.setItem('currentUser', user.uid);
            } else {
                setCurrentUser(null);
                localStorage.removeItem('currentUser');
            }
        });
    }, []);
    return (
        <div>
            <h1>Egzamin z Wychowania Fizycznego</h1>
            <div>
                {currentUser ? (
                    <h1>Zalogowany</h1>
                ) : (
                    <h1 logout>Niezalogowany</h1>
                )}
                <LoginLogoutForm />
            </div>
            <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
                <Link to="/exam">exam</Link> |{' '}
                <Link to="/famale-exam">famale-exam</Link> {' '}
                <Link to="/male-exam">male-exam</Link>
            </nav>
            <Outlet />
        </div>
    );
}
