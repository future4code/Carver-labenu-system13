import { Request, Response } from "express"
import { HobbyDatabase } from "../../data/student/hobby/hobbyDatabase"
import { StudentCapacity } from "../../entities/capacities/studentsCapacities/studentCapacity"
import { Hobby } from "../../entities/capacityDetails/hobby/hobby"

import { IdGenerator } from "../../services/idGenerator/idGenerator"

export const createHobbie = async(
    req: Request,
    res: Response
) => {
    let errorCode = 400
    try {
        const idStudentHobbiy = new IdGenerator()
        const idHobby = new IdGenerator()

        const hobby = new Hobby(idHobby.getId(), req.body.name)

        const studentHobby = new StudentCapacity(idStudentHobbiy.getId(), req.body.userId, idHobby.getId())

        const database = new HobbyDatabase()

        await database.createHobby(hobby)
        await database.createStudantHobby(studentHobby)
        
        res.status(200).send("Hobby has been created")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}