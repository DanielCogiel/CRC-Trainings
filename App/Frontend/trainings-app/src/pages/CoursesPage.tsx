import React from 'react'

import MainLayout from '../layouts/MainLayout';
import CourseModel from '../interfaces/CourseModel';

interface CoursesPageProps {
    
}
 
interface CoursesPageState {
    courses: CourseModel[],
    isLoading: boolean
}
 
class CoursesPage extends React.Component<CoursesPageProps, CoursesPageState> {
    constructor(props: CoursesPageProps) {
        super(props);
        this.state = {
            courses: [],
            isLoading: true
        };
    }

    async getCourses(): Promise<void> {
        const response = await fetch('http://localhost:4000/api');
        const data = await response.json();
        this.setState({
            courses: data,
            isLoading: false
        });
    }

    componentDidMount(): void {
        console.log(this.state.courses)
        this.getCourses();
    }

    render() { 
        return ( 
        <>
            <MainLayout>
                <div>Courses page.</div>
                {this.state.courses.map(elem => {return <p>{elem.language}</p>})}
            </MainLayout>
        </> );
    }
}
 
export default CoursesPage;