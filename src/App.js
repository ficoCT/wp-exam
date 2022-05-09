import React, {useEffect, useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import LoginLogoutForm from './components/Form';
import { auth } from './firebase';
import {Container, Nav, Navbar} from "react-bootstrap";

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
        <>
            {/*<div>*/}
            {/*    {currentUser ? (*/}
            {/*        <h1>Zalogowany</h1>*/}
            {/*    ) : (*/}
            {/*        <h1 logout>Niezalogowany</h1>*/}
            {/*    )}*/}
            {/*    <LoginLogoutForm />*/}
            {/*</div>*/}
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/everyone-exam">Egzamin WF</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/famale-exam"> Egzamin kobiety</Nav.Link>
                        <Nav.Link href="/male-exam">Egzamin mężczyźni</Nav.Link>
                        <Nav.Link href="/create-exam">Utwórz egzamin</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}
