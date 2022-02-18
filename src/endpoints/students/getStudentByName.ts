import { Request, Response } from "express"
import { StudentDatabase } from "../../data/student/StudentDatabase"
import { Student } from "../../entities/users/students/student"
import { FormatDate } from "../../services/dates/formatDate"

export const getStudentByName = async(
    req: Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const name: string = req.query.name as string

        const database = new StudentDatabase()

        const result = await database.getStudentByName(name)

        const student = new Student(result.id, result.name, result.email, result.birth_date, result.id_class)
        
        const datePT = new FormatDate(student.getBirthDate())

        student.setBirthDate(datePT.formatPT()) 

        res.status(200).send(student)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}