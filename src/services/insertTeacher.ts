import { connection } from "../data/connection"
import { Teacher } from "../entities/users/teachers/teacher"

export const insertTeacher = async (teacher: Teacher):Promise<void> => {
    await connection("teacher")
    .insert({
        id: teacher.getId(),
        name: teacher.getName(),
        email: teacher.getEmail(),
        birth_date: teacher.getBirthDate(),
        id_class: teacher.getClassGroup()
    })
}