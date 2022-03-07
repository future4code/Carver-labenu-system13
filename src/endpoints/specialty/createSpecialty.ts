import { Request, Response } from "express"
import { SpecialtyDatabase } from "../../data/teacher/specialty/specialtyDatabase"
import { TeachersCapacity } from "../../entities/capacities/teachersCapacities/teachersCapacities"
import { Specialty } from "../../entities/capacityDetails/specialty/specialty"
import { IdGenerator } from "../../services/idGenerator/idGenerator"

export const createSpecialty = async( req: Request, res: Response) => {
    let errorCode = 400
    try {
        const idSTeacherSpecialty = new IdGenerator()
        const idSpecialty = new IdGenerator()

        const specialty = new Specialty(idSpecialty.getId(), req.body.name)

        const teachersCapacity = new TeachersCapacity(idSTeacherSpecialty.getId(), req.body.userId, idSpecialty.getId())

        const database = new SpecialtyDatabase()

        await database.createSpecialty(specialty)
        await database.createTeacherSpecialty(teachersCapacity)
        
        res.status(200).send("Specialty has been created")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}