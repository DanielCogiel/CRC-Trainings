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

//gets all courses
app.get(`${API_URL}${COURSES_URL}/all`, (req: Request, res: Response) => {
    let data: CourseModel[] = [];
    connection.query('SELECT Users.id FROM Users WHERE Users.username = ?', [req.query.username], (error, id_row) => {
        const user_id = id_row[0].id;
        connection.query('SELECT Courses.id AS course_id, Enrolled.user_id AS enroll_id, Courses.owner_id AS owner_id FROM Users JOIN Enrolled ON Users.id = Enrolled.user_id RIGHT JOIN Courses ON Enrolled.course_id = Courses.id WHERE Courses.owner_id = ? OR Enrolled.user_id = ?;',
        [user_id, user_id], (error, bindedCoursesData) => {
            connection.query('SELECT Courses.id, Courses.level, Users.username, Courses.title, Courses.language, Courses.dateStart, Courses.dateFinish, Courses.hoursStart, Courses.hoursFinish, Courses.hoursTimes, Courses.location, Courses.trainer FROM Courses JOIN Users ON Courses.owner_id = Users.id', [], 
            (error1, result) => {
                if (!error1) {
                    result.map((course: any) => {
                        let formattedLevel = course.level.toLowerCase().slice(1);
                        formattedLevel = course.level.charAt(0) + formattedLevel;
                        data = [...data, {
                            id: course.id,
                            owner: course.username,
                            title: course.title,
                            language: mapLanguage(course.language, true).toUpperCase(),
                            date: {
                                start: new Date(course.dateStart).toISOString().slice(0,10),
                                finish: new Date(course.dateFinish).toISOString().slice(0,10)
                            },
                            hours: {
                                start: course.hoursStart.slice(0, 5),
                                finish: course.hoursFinish.slice(0, 5),
                                times: course.hoursTimes
                            },
                            level: formattedLevel,
                            location: course.location,
                            trainer: course.trainer,
                            isEnrolled: !!bindedCoursesData.find((elem: any) => elem.course_id === course.id && elem.enroll_id === user_id),
                            isOwner: !!bindedCoursesData.find((elem: any) => elem.course_id === course.id && elem.owner_id === user_id)
                        }]
                    })
                    res.json(data);
                } else {
                    res.status(500).json({message: 'SQL error: ' + error1.stack});
                }
            })
        })
    })
})


app.get(`${API_URL}${COURSES_URL}/personal`, (req: Request, res: Response) => {
    res.json(personalCourses);
})

app.delete(`${API_URL}${COURSES_URL}/:id/delete`, (req: Request, res: Response) => {
    const username = req.body.username
    const course_id = req.params.id
    connection.query('SELECT * FROM Users JOIN Courses ON Users.id = Courses.owner_id WHERE username = ? AND Courses.id = ?',
    [username, course_id], (error, result) => {
        if (error) {
            res.status(500).send('SQL Error: ' + error.stack)
        } else {
            if (result.length > 0) {
                connection.query('DELETE FROM Courses WHERE Courses.id = ?', [result[0].id], (error, deleteResult) => {
                    if (error) {
                        res.status(500).send('Could not delete given course.')
                    } else {
                        res.send('Course successfully deleted.')
                    }
                })
            } else {
                res.status(500).send('Such course does not exist or you are not owner of this course.')
            }
        }
    })
})

app.delete(`${API_URL}${COURSES_URL}/:id/leave`, (req: Request, res: Response) => {
    const course_id = parseInt(req.params.id);
    const username = req.body.username;

    connection.query('DELETE e FROM Enrolled e JOIN Users ON e.user_id = Users.id WHERE Users.username = ? AND e.course_id = ?', 
    [username, course_id], (error, result) => {
        if (error) {
            res.status(500).send('SQL Error: ' + error.stack)
        } else {
            if (result.affectedRows === 1) {
                res.send('Successfully left course.')
            } else {
                res.status(500).send('Could not leave from course.')
            }
        }
    })  
})

//enrolls user to course
app.post(`${API_URL}${COURSES_URL}/:id/enroll`, (req: Request, res: Response) => {
    const course_id = parseInt(req.params.id);
    const username = req.body.username;

    connection.query('SELECT * FROM Users WHERE username = ?', [username], (error, result) => {
        if (error) {
            res.status(500).send('SQL Error: ' + error.stack)
        } else {
            connection.query("SELECT * FROM Enrolled WHERE user_id = ? AND course_id = ?", [result[0].id, course_id], (error1, result1) => {
                if (error1) {
                    res.status(500).send('SQL Error: '+ error1.stack)
                } else {
                    if (result1.length > 0) {
                        res.status(500).send('You already enrolled to this course.')
                    } else {
                        connection.query('INSERT INTO Enrolled(user_id, course_id) VALUES(?, ?)', [result[0].id, course_id], (error2, result2) => {
                            if (error2) {
                                res.status(500).send('SQL Error: ' + error2.stack)
                            } else {
                                if (result2.affectedRows > 0) {
                                    res.send('Successfully enrolled to course.');
                                } else {
                                    res.status(500).send('Could not enroll to this course.');
                                }
                            }
                        })
                    }
                }
            })
        }
    })
}) 

//registers course
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

//registers user
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

//logs user in
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