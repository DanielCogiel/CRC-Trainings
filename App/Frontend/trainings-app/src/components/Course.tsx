import React from 'react';
import CourseModel from '../interfaces/CourseModel'
import TextInfo from '../atoms/TextInfo';
import CourseBanner from '../atoms/CourseBanner';
import pythonIcon from '../resources/images/python_icon.svg'
import '../styles/Course.scss'

interface CourseProps {
    course: CourseModel;
}
 
interface CourseState {
    
}
 
class Course extends React.Component<CourseProps, CourseState> {
    constructor(props: CourseProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return ( 
            <div className='card'>
                <CourseBanner imgURL={pythonIcon} id={this.props.course.id!} isEnrolled={!!this.props.course.isEnrolled} />
                <TextInfo course={this.props.course} />
            </div>
         );
    }
}
 
export default Course;