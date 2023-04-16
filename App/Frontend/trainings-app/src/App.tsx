import React from 'react';
import { Route, Routes } from 'react-router-dom';

import RouteModel from './interfaces/RouteModel';
import routes from './config/routes';
import './App.scss';

interface AppProps {
  
}
 
interface AppState {
  
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }
  render() { 
    return ( 
    <>
      <Routes>
        { routes.map((route: RouteModel) => { return <Route path={route.path} element={route.component} /> }) }
      </Routes>
    </>
    );
  }
}

export default App;