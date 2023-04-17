import express, {Express, Request, Response} from 'express'
import CourseModel from './interfaces/CourseModel';
import cors from 'cors';

const API_URL: string = '/api'
const COURSES_URL: string = '/courses'

const courses: CourseModel[] = [
    {
        id: 1,
        title: "Python course for beginners",
        language: "PL",
        date: {
            start: "01.12.2023",
            finish: "31.12.2023"
        },
        hours: {
            start: "8:00",
            finish: "16:00",
            times: 8
        },
        level: "Basic",
        location: "Remote",
        trainer: "Jan Kowalski"
    },
    {
        id: 2,
        title: "Python course for intermediates",
        language: "EN",
        date: {
            start: "05.05.2023",
            finish: "30.06.2023"
        },
        hours: {
            start: "8:00",
            finish: "18:00",
            times: 4
        },
        level: "Intermediate",
        location: "Remote",
        trainer: "Jan Nowak"
    },
    {
        id: 3,
        title: "Python course for beginners",
        language: "PL",
        date: {
            start: "01.12.2023",
            finish: "31.12.2023"
        },
        hours: {
            start: "8:00",
            finish: "16:00",
            times: 8
        },
        level: "Basic",
        location: "Remote",
        trainer: "Jan Kowalski"
    },
    {
        id: 4,
        title: "Python course for intermediates",
        language: "EN",
        date: {
            start: "05.05.2023",
            finish: "30.06.2023"
        },
        hours: {
            start: "8:00",
            finish: "18:00",
            times: 4
        },
        level: "Intermediate",
        location: "Remote",
        trainer: "Jan Nowak"
    }
]

const personalCourses: CourseModel[] = [
    {
        id: 1,
        title: "Python course for beginners",
        language: "PL",
        date: {
            start: "01.12.2023",
            finish: "31.12.2023"
        },
        hours: {
            start: "8:00",
            finish: "16:00",
            times: 8
        },
        level: "Basic",
        location: "Remote",
        trainer: "Jan Kowalski"
    },
    {
        id: 2,
        title: "Python course for intermediates",
        language: "EN",
        date: {
            start: "05.05.2023",
            finish: "30.06.2023"
        },
        hours: {
            start: "8:00",
            finish: "18:00",
            times: 4
        },
        level: "Intermediate",
        location: "Remote",
        trainer: "Jan Nowak"
    }
]

const app: Express = express();
const PORT: number = 4000;

app.use(cors());

app.get(`${API_URL}${COURSES_URL}/all`, (req: Request, res: Response) => {
    res.json(courses);
})

app.get(`${API_URL}${COURSES_URL}/personal`, (req: Request, res: Response) => {
    res.json(personalCourses);
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`)
})