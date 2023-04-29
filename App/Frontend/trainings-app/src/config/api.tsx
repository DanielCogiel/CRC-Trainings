const SERVER_URL = 'http://localhost:4000'
const API_URL = `${SERVER_URL}/api`;
const REGISTER_URL = `${API_URL}/register`;
const LOGIN_URL = `${API_URL}/login`
export const COURSES_API_URL = `${API_URL}/courses`
const REGISTER_COURSE_URL = `${COURSES_API_URL}/register`
const ALL_COURSES_URL = `${COURSES_API_URL}/all`
const PERSONAL_COURSES_URL = `${COURSES_API_URL}/personal`

export const API_URLS = {
    COURSES: {
        ALL: ALL_COURSES_URL,
        PERSONAL: PERSONAL_COURSES_URL,
        REGISTER: REGISTER_COURSE_URL
    },
    AUTH: {
        REGISTER: REGISTER_URL,
        LOGIN: LOGIN_URL
    }
}