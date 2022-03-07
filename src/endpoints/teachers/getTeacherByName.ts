import { Request, Response } from "express"
import { TeacherDatabase } from "../../data/teacher/TeacherDatabase"
import { Teacher } from "../../entities/users/teachers/teacher"
import { FormatDate } from "../../services/dates/formatDate"

export const getTeacherByName = async( req: Request, res: Response) => {
    try {
        const name: string = req.query.name as string

        const database = new TeacherDatabase()

        const result = await database.getTeacherByName(name)

        const teacher = new Teacher (result.id, result.name, result.email, result.birth_date, result.id_class)
        
        const datePT = new FormatDate(teacher.getBirthDate())

        teacher.setBirthDate(datePT.formatPT()) 

        res.status(200).send(teacher)
    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Unexpected error" })
        }
    }
    
}
