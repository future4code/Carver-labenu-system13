
import { StudentCapacity } from "../../../entities/capacities/studentsCapacities/studentCapacity";
import { Hobby } from "../../../entities/capacityDetails/hobby/hobby";
import { BaseDatabase } from "../../BaseDatabase";

export class HobbyDatabase extends BaseDatabase {
    private static tableName = "labenu_system_students_hobbies"
    private static tableName1 = "labenu_system_hobbies"

    createStudantHobby = (studentHobby: StudentCapacity) => BaseDatabase
        .connection(HobbyDatabase.tableName)
        .insert({
            id: studentHobby.getId(),
            studant_id: studentHobby.getUserId(),
            hobby_id: studentHobby.getCapacityId(),
        }) 
        

    createHobby = (hobby: Hobby) => BaseDatabase.connection(HobbyDatabase.tableName1)
        .insert({
            id: hobby.getID(),
            name: hobby.getName()
        })



}

