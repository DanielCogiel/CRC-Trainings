import React from 'react';

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
                <header>This is header of main layout.</header>
                {this.props.children}
            </>
         );
    }
}
 
export default MainLayout;