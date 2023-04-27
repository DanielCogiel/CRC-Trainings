import React from 'react';
import NavButton from '../atoms/NavButton';
import { Navigate } from 'react-router-dom';

import AppLogo from '../resources/images/graduation_school_icon.svg'
import '../styles/Header.scss'
import routes from '../config/routes';

interface HeaderProps {
    isAlternative?: boolean
}
 
interface HeaderState {
    redirectToLogin: boolean
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            redirectToLogin: false
        };
    }

    logout = ():void => {
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('role');
        this.setState({
            ...this.state,
            redirectToLogin: true
        })
    }

    render() { 
        return ( 
            <header id="header" className={this.props.isAlternative ? 'alternative' : ''}>
                <div id="header-left">
                    <img src={AppLogo} alt="Trainings logo" title="Trainings" />
                    <h1>Trainings</h1>
                </div>
                <div id="header-right">
                    { routes.filter(route => route.HeaderRouteName).map(
                        (route, idx) => <NavButton isAlternative={this.props.isAlternative} key={idx} path={route.path}>{route.HeaderRouteName}</NavButton>
                    ) }  
                    <button onClick={this.logout} className='trainings-button'>Logout</button>
                </div>
                { this.state.redirectToLogin && <Navigate to='/login' /> }
            </header>
        );
    }
}
 
export default Header;