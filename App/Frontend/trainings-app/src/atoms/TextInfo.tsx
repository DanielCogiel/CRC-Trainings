import React from "react";
import CourseModel from "../interfaces/CourseModel";
import TextLabel from "./TextLabel";
import calendarIcon from '../resources/icons/calendar_icon.svg'
import clockIcon from '../resources/icons/clock_icon.svg'
import languageIcon from '../resources/icons/uk-flag-round-circle-icon.svg'
import levelIcon from '../resources/icons/level_icon.svg'
import locationIcon from '../resources/icons/location_icon.svg'
import trainerIcon from '../resources/icons/trainer_logo.svg'
import '../styles/TextInfo.scss'

interface TextInfoProps {
    course: CourseModel
}
 
interface TextInfoState {
    
}
 
class TextInfo extends React.Component<TextInfoProps, TextInfoState> {
    constructor(props: TextInfoProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div className="training-content">
                <div className="coursename-wrapper">
                    <h1>{this.props.course.title}</h1>
                </div>
                <div className="training-content-grid">
                    <TextLabel text={`${this.props.course.date.start} - ${this.props.course.date.finish}`} imgURL={calendarIcon} />
                    <TextLabel text={`${this.props.course.hours.start} - ${this.props.course.hours.finish}
                     (x${this.props.course.hours.times})`} imgURL={clockIcon} />
                    <TextLabel text={this.props.course.language} imgURL={languageIcon} />
                    <TextLabel text={this.props.course.level} imgURL={levelIcon} />
                    <TextLabel text={this.props.course.location} imgURL={locationIcon} />
                    <TextLabel text={this.props.course.trainer} imgURL={trainerIcon} />
                </div>
            </div>
        );
    }
}
 
export default TextInfo;