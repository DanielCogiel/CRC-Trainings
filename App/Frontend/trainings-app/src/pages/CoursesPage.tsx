import React from 'react'

import MainLayout from '../layouts/MainLayout';

interface CoursesPageProps {
    
}
 
interface CoursesPageState {
    
}
 
class CoursesPage extends React.Component<CoursesPageProps, CoursesPageState> {
    constructor(props: CoursesPageProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return ( 
        <>
            <MainLayout>
                <div>Courses page.</div>
            </MainLayout>
        </> );
    }
}
 
export default CoursesPage;