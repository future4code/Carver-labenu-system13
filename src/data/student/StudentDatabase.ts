import { Student } from "../../entities/users/students/student";
import { BaseDatabase } from "../BaseDatabase";

export class StudentDatabase extends BaseDatabase {
    private static tableName = "labenu_system_students"

    private toStudent = (input: Student) => new Student(
        input.getId(),
        input.getName(),
        input.getEmail(),
        input.getBirthDate(),
        input.getClassGroup(),
    )

    createStudent = (student: Student) => BaseDatabase
        .connection(StudentDatabase.tableName)
        .insert({
            id: student.getId(),
            name: student.getName(),
            email: student.getEmail(),
            birth_date: student.getBirthDate(),
            id_class: student.getClassGroup()
        })

    getStudentByName = async (name: string) => {
        if (!name) {
            throw new Error("Please, check input for request!")
        }

        const [result] = await BaseDatabase.connection(StudentDatabase.tableName).where({ name })
        
        if (!result) {
            throw new Error("Student not found!")
        }

        return result
    }

    putStudentClassRoom = (id: string, classRoom: string) => BaseDatabase.connection(StudentDatabase.tableName).update("id_class", classRoom).where("id",id)
}

