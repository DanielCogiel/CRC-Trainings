import React from 'react';
import '../styles/CourseBanner.scss'

interface CourseBannerProps {
    imgURL: string
}
 
interface CourseBannerState {
    
}
 
class CourseBanner extends React.Component<CourseBannerProps, CourseBannerState> {
    constructor(props: CourseBannerProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return ( 
            <div className="training-image">
                <img src={this.props.imgURL} />
                <button>+</button>
            </div>
         );
    }
}
 
export default CourseBanner;