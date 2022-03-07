import { Request, Response } from "express"
import { StudentDatabase } from "../../data/student/StudentDatabase"
import { Student } from "../../entities/users/students/student"
import {FormatDate} from "../../services/dates/formatDate"
import { IdGenerator } from "../../services/idGenerator/idGenerator"

export const createStudent = async(
    req: Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const id= new IdGenerator()
        const student: Student = new Student(id.getId(), req.body.name, req.body.email, req.body.birthDate, req.body.classGroup)

        const database = new StudentDatabase()

        const dateUTC = new FormatDate(student.getBirthDate())
        
        student.setBirthDate(dateUTC.formatUTC())

        await database.createStudent(student)

        res.status(200).send("Student has been created!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}