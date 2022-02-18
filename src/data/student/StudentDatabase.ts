import { Student } from "../../entities/users/students/student";
import { BaseDatabase } from "../BaseDatabase";

export class StudentDatabase extends BaseDatabase {
    private static tableName = "labenu_system_students"

    private toStudent = (input: Student) => new Student(
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
            class_room: student.getClassGroup()
        })

    getStudentByName = async (name: string) => {
        const [result] = await BaseDatabase.connection(StudentDatabase.tableName).where({ name })
        if (result) return this.toStudent(result)
    }

    putStudentClassRoom = (id: string, classRoom: string) => BaseDatabase.connection(StudentDatabase.tableName).update(classRoom).where(id)
}