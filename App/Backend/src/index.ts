import express, {Express, Request, Response} from 'express'
import CourseModel from './interfaces/CourseModel';
import cors from 'cors';

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
    }
]

const app: Express = express();
const PORT: number = 4000;

app.use(cors());

app.get('/api', (req: Request, res: Response) => {
    res.json(courses);
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`)
})