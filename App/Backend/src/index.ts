import express, {Express, Request, Response} from 'express'
import mysql from 'mysql';
import CourseModel from './interfaces/CourseModel';
import mapLanguage from './utility/mappers';
import cors from 'cors';

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'mysqluser',
    password: 'mysqluser',
    database: 'TRAININGS_DB'
})

connection.connect(error => {
    if (error) {
        console.error('Error connecting to database: ', error?.stack)
        return; 
    }
    console.log('Connection with database established.')
})

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

app.use(express.json(), cors());

app.get(`${API_URL}${COURSES_URL}/all`, (req: Request, res: Response) => {
    res.json(courses);
})

app.get(`${API_URL}${COURSES_URL}/personal`, (req: Request, res: Response) => {
    res.json(personalCourses);
})

app.post(`${API_URL}${COURSES_URL}/register`, (req: Request, res: Response) => {
    const {username, title, language, date, hours, level, location, trainer} = req.body
    const dateStart = date.start;
    const dateFinish = date.finish;
    const hoursStart = hours.start;
    const hoursFinish = hours.finish;
    const hoursTimes = hours.times;

    connection.query('SELECT * FROM Users WHERE username = ?', [username], (error, result) => {
        if (error) {
            res.status(500).send('SQL Error: ' + error.stack);
        } else {
            if (result.length > 0) {
                const owner_id = result[0].id;

                connection.query('INSERT INTO Courses(owner_id, title, language, dateStart, dateFinish, hoursStart, hoursFinish, hoursTimes, level, location, trainer) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [owner_id, title, mapLanguage(language), dateStart, dateFinish,
                     hoursStart, hoursFinish, hoursTimes, level.toUpperCase(), location, trainer], 
                     (error: mysql.MysqlError | null, result: mysql.OkPacket) => {
                        if (error) {
                            res.status(500).send('SQL Error: ' + error.stack)
                        } else {
                            if (result.affectedRows != 0) {
                                res.send('Added course successfully.')
                            } else {
                                res.status(500).send('Could not add given course.')
                            }
                        }
                     });
            } else {
                res.status(500).send('No such user in the database.');
            }
        }
    })
})

app.post(`${API_URL}/register`, (req: Request, res: Response) => {
    const {username, password, name, surname, email, isCreator} = req.body;

    connection.query('SELECT * FROM Users WHERE username = ?', [username], ((error, results) => {
        if (!error && results.length > 0) {
            res.status(303).send(`User ${username} already exists.`)
        } else {
            connection.query('INSERT INTO Users(username, password, name, surname, email, role) VALUES (?, ?, ?, ?, ?, ?)', 
            [username, password, name, surname, email, isCreator ? 'CREATOR' : 'REGULAR'], (error, result) => {
                if (error) {
                    res.status(500).send('Error inserting user into database.');
                } else {
                    res.send('User added succesfully.')
                }
            })
        }
    }));
})

app.post(`${API_URL}/login`, (req: Request, res: Response) => {
    const {username, password} = req.body;

    connection.query('SELECT * FROM Users WHERE username = ?', [username], (error, result) => {
        if (error) {
            res.status(500).json({
                isAuthenticated: false,
                message: 'Error trying to log in.'
            })
        } else {
            if (result.length > 0) {
                if (result[0].password === password) {
                    res.json({
                        isAuthenticated: true,
                        role: result[0].role,
                        message: 'Login successful.'
                    });
                } else {
                    res.status(500).json({
                        isAuthenticated: false,
                        message: 'Incorrect password.'
                    })
                }
            } else {
                res.status(500).json({
                    isAuthenticated: false,
                    message: 'No such user in the database.'
                })
            }
        }
    })
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`)
})