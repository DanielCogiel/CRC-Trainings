interface CourseModel {
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