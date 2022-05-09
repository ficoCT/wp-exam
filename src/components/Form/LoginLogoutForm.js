import React, { useReducer } from 'react';
import { auth } from '../../firebase';
import {Form, Button} from "react-bootstrap";

const LoginLogoutForm = () => {

    const [inputsContent, setInputsContent] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            email: "",
            password: ""
        }
    );
    const { email, password } = inputsContent;

    const handleInputChange = e => {
        setInputsContent({
            [e.target.name]: e.target.value
        });
    };

    const handleSignIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .catch(error =>
                alert(
                    `Your email or password is incorrect, please check your data, ${error}`
                )
            );
    };

    const handleSignUp = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .catch(error =>
                alert(`Email is already in use, sign in or use other email, ${error}`)
            );
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    placeholder="jondoe@gmail.com"
                    id="email-input"
                    type="email"
                    name="email"
                    required
                    onChange={handleInputChange}
                    value={email}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Hasło</Form.Label>
                <Form.Control
                    placeholder="********"
                    type="password"
                    name="password"
                    id="password-input"
                    required
                    onChange={handleInputChange}
                    value={password}
                />
            </Form.Group>
            <Button name="submit" variant="primary" type="submit" onClick={handleSignIn}>
                zaloguj się
            </Button>
            <Button name="submit" variant="primary" type="submit" onClick={handleSignUp} logout>
                zarejestruj się
            </Button>
        </Form>
    );
};

export default LoginLogoutForm;