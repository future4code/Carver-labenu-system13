import { Request, Response } from "express"
import { ClassGroupDataBase } from "../../data/classGroup/ClassGroupDatabase"
import { ClassGroup } from "../../entities/classGroup/classGroup"
import { IdGenerator } from "../../services/idGenerator/idGenerator"

export const createClassGroup = async(
    req:Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const id = new IdGenerator()
        const classGroup: ClassGroup = new ClassGroup(id.getId(), req.body.name, req.body.module)
        
        const dataBase = new ClassGroupDataBase()

        await dataBase.createClassGroup(classGroup)

        res.status(200).send("Class has been created!")
    } catch (error: any) {
        res.status(200).send(error.message)
    }
}