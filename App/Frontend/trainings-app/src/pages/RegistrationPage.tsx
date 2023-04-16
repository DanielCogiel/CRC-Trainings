import React from 'react';

interface RegistrationPageProps {
    
}
 
interface RegistrationPageState {
    
}
 
class RegistrationPage extends React.Component<RegistrationPageProps, RegistrationPageState> {
    constructor(props: RegistrationPageProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (  
            <>
                <div>Registration page.</div>
            </>
        );
    }
}
 
export default RegistrationPage;