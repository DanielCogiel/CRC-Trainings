import React from 'react';

import MainLayout from '../layouts/MainLayout';

interface CourseRegistrationPageProps {
    
}
 
interface CourseRegistrationPageState {
    
}
 
class CourseRegistrationPage extends React.Component<CourseRegistrationPageProps, CourseRegistrationPageState> {
    constructor(props: CourseRegistrationPageProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return ( 
            <>
                <MainLayout>
                    <div>Course registration page.</div>
                </MainLayout>
            </>
         );
    }
}
 
export default CourseRegistrationPage;