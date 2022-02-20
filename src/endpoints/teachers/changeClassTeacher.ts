import { Request, Response } from "express"
import { TeacherDatabase } from "../../data/teacher/TeacherDatabase"


export const changeClassTeacher = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { id, classGroup } = req.body

        const database = new TeacherDatabase()

        await database.putTeacherClassRoom(id, classGroup)

        res.status(200).send("Teacher class has been changed!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}