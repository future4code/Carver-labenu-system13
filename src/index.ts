import { app } from "./app";
import { changeStudentClass } from "./endpoints/students/changeClassStudent";
import { createTeacher } from "./endpoints/teachers/createTeacher";
import { createStudent } from "./endpoints/students/createStudent";
import { getStudentByName } from "./endpoints/students/getStudentByName";
import { getTeacherByName } from "./endpoints/teachers/getTeacherByName"
import { createHobbie } from "./endpoints/hobbies/createHobbie";
import { createSpecialty } from "./endpoints/specialty/createSpecialty";
import { createClassGroup } from "./endpoints/classGroup/createClassGroup";
import { changeClassModule } from "./endpoints/classGroup/changeModule";
import { changeClassTeacher } from "./endpoints/teachers/changeClassTeacher";




app.post("/students", createStudent)
app.put("/students/class", changeStudentClass)
app.get("/students", getStudentByName)
app.get("/teachers", getTeacherByName)
app.post("/teachers", createTeacher)
app.post("/students/hobbies", createHobbie)
app.post("/teachers/specialty", createSpecialty)
app.post("/class", createClassGroup)
app.post("/class/module", changeClassModule)
app.put("/teacher/class",changeClassTeacher)
