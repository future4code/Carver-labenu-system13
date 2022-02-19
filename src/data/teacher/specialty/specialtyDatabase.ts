import { TeachersCapacity } from "../../../entities/capacities/teachersCapacities/teachersCapacities";
import { Specialty } from "../../../entities/capacityDetails/specialty/specialty";
import { BaseDatabase } from "../../BaseDatabase";

export class SpecialtyDatabase extends BaseDatabase {
    private static tableName = "labenu_system_teachers_specialty"
    private static tableName1 = "labenu_system_specialty"

    createTeacherSpecialty = (teacherSpecialty: TeachersCapacity) => BaseDatabase
        .connection(SpecialtyDatabase.tableName)
        .insert({
            id: teacherSpecialty.getId(),
            teacher_id: teacherSpecialty.getUserId(),
            specialty_id: teacherSpecialty.getCapacityId(),
        }) 
        

    createSpecialty = (specialty: Specialty) => BaseDatabase.connection(SpecialtyDatabase.tableName1)
        .insert({
            id: specialty.getID(),
            name: specialty.getName()
        })



}