import React from 'react';
import Header from '../components/Header';

interface MainLayoutProps {
    children?: React.ReactNode
}
 
interface MainLayoutState {
    
}
 
class MainLayout extends React.Component<MainLayoutProps, MainLayoutState> {
    constructor(props: MainLayoutProps) {
        super(props);
        this.state = {};
    }
    render() { 
        return ( 
            <>
                <Header />
                {this.props.children}
            </>
         );
    }
}
 
export default MainLayout;