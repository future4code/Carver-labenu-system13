import { Request, Response } from "express"
//import moment from "moment"
import { StudentDatabase } from "../../data/student/StudentDatabase"
import { Student } from "../../entities/users/students/student"
import {FormatDate} from "../../services/dates/formatDate"

export const createStudent = async(
    req: Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const student: Student = new Student(req.body.name, req.body.email, req.body.birthDate, req.body.classGroup)

        const database = new StudentDatabase()

        const dateUTC = new FormatDate(student.getBirthDate())
        
        student.setBirthDate(dateUTC.formatUTC())

        await database.createStudent(student)

        res.status(200).send("Student has been created!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}