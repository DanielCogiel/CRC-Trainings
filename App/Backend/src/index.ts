import express, {Express, Request, Response} from 'express'

const app: Express = express();
const PORT: number = 4000;

app.get('/', (req: Request, res: Response) => {
    res.send('Express Typescript Server for Trainings');
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`)
})