import React from 'react';

import MainLayout from '../layouts/MainLayout';
import '../styles/CourseRegistrationPage.scss'
import { Form, InputGroup } from 'react-bootstrap';


interface CourseRegistrationPageProps {
    
}
 
interface CourseRegistrationPageState {
    
}
 
class CourseRegistrationPage extends React.Component<CourseRegistrationPageProps, CourseRegistrationPageState> {
    constructor(props: CourseRegistrationPageProps) {
        super(props);
        this.state = {};
    }

    componentDidMount(): void {
        document.body.classList.add('body-purple');
    }

    componentWillUnmount(): void {
        document.body.classList.remove('body-purple');
    }

    render() { 
        return ( 
            <>
                <MainLayout>
                <h1 className="section-header">Register new course</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-10">
                        <Form>
                            <Form.Group>
                                <Form.Label >Course title</Form.Label>
                                <Form.Control size='lg' id="courseTitle" type='text' placeholder="Course title" />
                            </Form.Group>
                            
                            <InputGroup>
                                <Form.Group>
                                    <Form.Label >First day</Form.Label>
                                    <Form.Control size='lg' id="courseFirstDay" type='date' />
                                </Form.Group> 
                                <Form.Group>
                                    <Form.Label >Last day</Form.Label>
                                    <Form.Control size='lg' id="courseLastDay" type='date' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label >Beginning hour</Form.Label>
                                    <Form.Control size='lg' id="courseBeginningHour" type='time' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label >Finishing hour</Form.Label>
                                    <Form.Control size='lg' id="courseFinishingHour" type='time' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label >Number of lessons</Form.Label>
                                    <Form.Control size='lg' id="courseNumberOfDays" type='number' placeholder="Number of lessons" />
                                </Form.Group>
                            </InputGroup>
                            
                            <InputGroup>
                                <Form.Group>
                                    <Form.Label >Language</Form.Label>
                                    <Form.Select size="lg">
                                        <option>EN</option>
                                        <option>PL</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label >Level</Form.Label>
                                    <Form.Select size="lg">
                                        <option>Basic</option>  
                                        <option>Intermediate</option>  
                                        <option>Expert</option>  
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label >Location</Form.Label>
                                    <Form.Control size='lg' id="courseLocation" type='text' placeholder="Course location" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label >Trainer's name</Form.Label>
                                    <Form.Control size='lg' id="courseTrainer" type='text' placeholder="Course title" />
                                </Form.Group>
                            </InputGroup>

                            
                        
                        </Form>
                        </div>
                    </div>
                </div>

                {/* <form>
                    <h1 className="section-header">Register new course</h1>
                    <div className="content-wrapper"> 
                        <div className="form-box">
                            <div className="form-field">
                                <p>Course name</p>
                                <input/>
                            </div>

                            <div className="form-fields-wrapper wider">
                                <div className="form-field wider">
                                    <p>First day</p>
                                    <input type="date" />
                                </div>
                                <div className="form-field wider">
                                    <p>Last day</p>
                                    <input type="date" />
                                </div>
                            </div>

                            <div className="form-fields-wrapper">
                                <div className="form-field">
                                    <p>Beginning hour</p>
                                    <input type='time' />
                                </div>
                                <div className="form-field">
                                    <p>Finishing hour</p>
                                    <input type='time' />
                                </div>
                            </div>

                            <div className="form-fields-wrapper">
                                <div className="form-field">
                                    <p>Language</p>
                                    <select>
                                        <option>PL</option>
                                        <option>EN</option>
                                    </select>
                                </div>
                                <div className="form-field">
                                    <p>Level</p>
                                    <select>
                                        <option>Basic</option>
                                        <option>Intermediate</option>
                                        <option>Expert</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-fields-wrapper">
                                <div className="form-field">
                                    <p>Location</p>
                                    <input/>
                                </div>
                                <div className="form-field">
                                    <p>Remote</p>
                                    <input type='radio' />
                                </div>
                                <div className="form-field">
                                    <p>Trainer's name</p>
                                    <input/>
                                </div>
                            </div>
                            <div className="form-buttons">
                                <button>Register new course</button>
                            </div>
                        </div>
                    </div>
                </form> */}
                </MainLayout>
            </>
         );
    }
}
 
export default CourseRegistrationPage;