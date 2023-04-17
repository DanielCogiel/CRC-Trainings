import React from 'react';
import CoursesPage from './CoursesPage';

interface PersonalCoursesPageProps {
    
}
 
interface PersonalCoursesPageState {
    
}
 
class PersonalCoursesPage extends CoursesPage {
    async getCourses(): Promise<void> {
        try {
            const response = await fetch('http://localhost:4000/api/courses/personal');
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
}
 
export default PersonalCoursesPage;