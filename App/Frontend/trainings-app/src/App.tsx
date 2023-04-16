import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import CoursesPage from './pages/CoursesPage';
import CourseRegistrationPage from './pages/CourseRegistrationPage';
import NotFoundPage from './pages/NotFoundPage';

import './App.css';

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
        <Route path='/' element={<Navigate to='/courses/dashboard' />} />
        <Route path='/courses/dashboard' element={<CoursesPage />} />
        <Route path='/courses/register' element={<CourseRegistrationPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
    );
  }
}
 
export default App;