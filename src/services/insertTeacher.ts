import {BaseDatabase} from '../data/BaseDatabase';
import { Teacher } from "../entities/users/teachers/teacher"

export const insertTeacher = async (teacher: Teacher):Promise<void> => {
    await BaseDatabase.connection("labenu_system_teacher")
    .insert({
        id: teacher.getId(),
        name: teacher.getName(),
        email: teacher.getEmail(),
        birth_date: teacher.getBirthDate(),
        id_class: teacher.getClassGroup()
    })
}