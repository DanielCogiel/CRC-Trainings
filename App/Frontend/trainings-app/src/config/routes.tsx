import RouteModel from "../interfaces/RouteModel";
import { Navigate } from "react-router";
import CoursesPage from "../pages/CoursesPage";
import CourseRegistrationPage from "../pages/CourseRegistrationPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import NotFoundPage from "../pages/NotFoundPage";

const COURSES_URL: string = '/courses'

const routes: RouteModel[] = [
    {
        path: '/',
        component: <Navigate to='/courses/all' />
    },
    {
        path: `${COURSES_URL}/all`,
        component: <CoursesPage />,
        HeaderRouteName: 'All courses'
    },
    {
        path: `${COURSES_URL}/personal`,
        component: <CoursesPage />,
        HeaderRouteName: 'My courses'
    },
    {
        path: `${COURSES_URL}/register`,
        component: <CourseRegistrationPage />
    },
    {
        path: '/login',
        component: <LoginPage />
    },
    {
        path: '/register',
        component: <RegistrationPage />
    },
    {
        path: '*',
        component: <NotFoundPage />
    }
]


export default routes;