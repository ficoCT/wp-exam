import React, {useEffect, useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Form from './components/Form';
import { auth } from './firebase';

const StyledWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Montserrat';
  text-transform: uppercase;
  color: hsl(153, 91%, 48%, 100%);
`;

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
            <StyledWrapper>
                {currentUser ? (
                    <StyledHeading>Zalogowany</StyledHeading>
                ) : (
                    <StyledHeading logout>Niezalogowany</StyledHeading>
                )}
                <Form />
            </StyledWrapper>
            <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
                <Link to="/exam">exam</Link> |{' '}
                <Link to="/famale-exam">famale-exam</Link> {' '}
                <Link to="/male-exam">male-exam</Link>
            </nav>
            <Outlet />
        </div>
    );

}
