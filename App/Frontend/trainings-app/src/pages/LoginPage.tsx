import React from 'react';

interface LoginPageProps {
    
}
 
interface LoginPageState {
    
}
 
class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
    constructor(props: LoginPageProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return (  
            <>
                <div>Login page.</div>
            </>
        );
    }
}
 
export default LoginPage;