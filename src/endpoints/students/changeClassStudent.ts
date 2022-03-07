import { Request, Response } from "express"
import { StudentDatabase } from "../../data/student/StudentDatabase"


export const changeStudentClass = async(
    req: Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const {id, classGroup} = req.body

        const database = new StudentDatabase()

        await database.putStudentClassRoom(id, classGroup)

        res.status(200).send("Student class has been changed!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}