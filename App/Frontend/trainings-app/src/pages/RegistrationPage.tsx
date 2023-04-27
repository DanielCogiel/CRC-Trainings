import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import '../styles/LoginPage.scss'

interface RegistrationPageProps {
    
}
 
interface RegistrationPageState {
    username: string, 
    firstName: string,
    lastName: string, 
    email: string,
    password: string,
    confirmedPassword: string,
    redirectToLogin: boolean
}
 
class RegistrationPage extends React.Component<RegistrationPageProps, RegistrationPageState> {
    constructor(props: RegistrationPageProps) {
        super(props);
        this.state = {
            username: '', 
            firstName: '',
            lastName: '', 
            email: '',
            password: '',
            confirmedPassword: '',
            redirectToLogin: false
        };
    }

    componentDidMount(): void {
        document.body.classList.add('body-with-image');
    }

    componentWillUnmount(): void {
        document.body.classList.remove('body-with-image');
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
    }

    handleChange = (event: any) => {
        this.setState({
            ...this.state,
            [event.target.id]: event.target.value
        });
    }

    navigateToLogin = () => {
        this.setState({
            ...this.state,
            redirectToLogin: true
        });
    }

    render() { 
        return (  
            <>
                <h1 className='section-header' style={{marginBottom: '-50px'}}>Register</h1>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-8'>
                            <Form className='login-form rounded p-3' onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                    id='username'
                                    placeholder='Enter your username'
                                    type='text'
                                    value={this.state.username}
                                    onChange={this.handleChange}></Form.Control>
                                </Form.Group>
                                <Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                        id='firstName'
                                        placeholder='Enter your first name'
                                        type='text'
                                        value={this.state.firstName}
                                        onChange={this.handleChange}></Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                        id='lastName'
                                        placeholder='Enter your last name'
                                        type='text'
                                        value={this.state.lastName}
                                        onChange={this.handleChange}></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control 
                                    id='email'
                                    placeholder='Enter your E-mail'
                                    type='email'
                                    value={this.state.email}
                                    onChange={this.handleChange}></Form.Control>
                                </Form.Group>
                                <Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control 
                                        id='password'
                                        placeholder='Enter your password'
                                        type='password'
                                        value={this.state.password}
                                        onChange={this.handleChange}></Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Confirm password</Form.Label>
                                        <Form.Control
                                        id='confirmedPassword'
                                        placeholder='Enter password again' 
                                        type='password'
                                        value={this.state.confirmedPassword}
                                        onChange={this.handleChange}></Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Button type='submit'>Register</Button>
                                    <Button onClick={this.navigateToLogin}>Log in</Button>
                                </Row>
                            </Form>
                            {
                                this.state.redirectToLogin && <Navigate to='/login' />
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
 
export default RegistrationPage;