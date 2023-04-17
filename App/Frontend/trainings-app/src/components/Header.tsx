import React from 'react';
import NavButton from '../atoms/NavButton';

import AppLogo from '../resources/images/graduation_school_icon.svg'
import '../styles/Header.scss'
import routes from '../config/routes';

interface HeaderProps {

}
 
interface HeaderState {
    
}
 
class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = { };
    }
    render() { 
        return ( 
            <header id="header">
                <div id="header-left">
                    <img src={AppLogo} alt="Trainings logo" title="Trainings" />
                    <h1>Trainings</h1>
                </div>
                <div id="header-right">
                    { routes.filter(route => route.HeaderRouteName).map(
                        (route, idx) => <NavButton key={idx} path={route.path}>{route.HeaderRouteName}</NavButton>
                    ) }    
                </div>
            </header>
        );
    }
}
 
export default Header;