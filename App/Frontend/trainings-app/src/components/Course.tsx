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
    isHidden: boolean
}
 
class Course extends React.Component<CourseProps, CourseState> {
    constructor(props: CourseProps) {
        super(props);
        this.state = {
            isHidden: false
        };
    }

    hideElement = (): void => {
        this.setState({
            ...this.state,
            isHidden: true
        })
    }

    render() { 
        return ( 
            <div style={{display: this.state.isHidden ? 'none' : 'flex'}} className='card'>
                <CourseBanner imgURL={pythonIcon} id={this.props.course.id!} isEnrolled={!!this.props.course.isEnrolled} />
                <TextInfo deleteElem={this.hideElement} course={this.props.course} />
            </div>
         );
    }
}
 
export default Course;