import CoursesPage from './CoursesPage';
 
class PersonalCoursesPage extends CoursesPage {
    API_URL: string = 'http://localhost:4000/api/courses/personal'
}
 
export default PersonalCoursesPage;