import { Level, Language } from "../config/enums"

interface CourseModel {
    id?: number,
    title: string,
    language: string,
    date: {
        start: string,
        finish: string
    },
    hours: {
        start: string,
        finish: string,
        times: number
    },
    level: string,
    location: string,
    trainer: string
}

export default CourseModel;