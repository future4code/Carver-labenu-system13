import { Request, Response } from "express";
import { TeacherDatabase } from "../data/teacher/TeacherDatabase";
import { Teacher } from '../entities/users/teachers/teacher';
import { FormatDate } from "../services/formatDate";


export const createTeacher = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const teacher: Teacher = new Teacher(req.body.name, req.body.email, req.body.birthDate, req.body.classGroup)


        const database = new TeacherDatabase()

        const dateUTC = new FormatDate(teacher.getBirthDate())

        teacher.setBirthDate(dateUTC.formatUTC())

        await database.createTeacher(teacher)

        res.status(200).send("The Teacher has been successfully registered!")

    } catch (error) {
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Unexpected error" })
        }
    }
}