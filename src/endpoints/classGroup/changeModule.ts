import { Request, Response } from "express"
import { ClassGroupDataBase } from "../../data/classGroup/ClassGroupDatabase"
import { StudentDatabase } from "../../data/student/StudentDatabase"


export const changeClassModule = async(
    req: Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const {id, module} = req.body

        const database = new ClassGroupDataBase()

        await database.putClassGroupModule(id, module)

        res.status(200).send("Module has been changed!")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}