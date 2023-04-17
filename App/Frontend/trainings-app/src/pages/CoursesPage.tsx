import React from 'react'

import MainLayout from '../layouts/MainLayout';
import Course from '../components/Course';
import CourseModel from '../interfaces/CourseModel';
import Preloader from '../components/Preloader';
import '../styles/CoursesPage.scss'

interface CoursesPageProps {
    
}
 
interface CoursesPageState {
    courses: CourseModel[],
    isLoading: boolean
}
 
class CoursesPage extends React.Component<CoursesPageProps, CoursesPageState> {
    API_URL: string = 'http://localhost:4000/api/courses/all'

    constructor(props: CoursesPageProps) {
        super(props);
        this.state = {
            courses: [],
            isLoading: true
        };
    }

    async getCourses(): Promise<void> {
        try {
            const response = await fetch(this.API_URL);
            const data = await response.json();
            this.setState({
                courses: data,
                isLoading: false
            });
            console.log(data)
        } catch (error) {
            console.error('Could not fetch data.')
        } 
    }

    componentDidMount(): void {
        this.getCourses();
    }

    render() { 
        return ( 
            <MainLayout> 
                { this.state.isLoading ? <Preloader /> :
                    <main id='container'>
                        {this.state.courses.map(course => <Course key={course.id} course={course} />)}
                    </main>
                }
            </MainLayout>
        );
    }
}
 
export default CoursesPage;