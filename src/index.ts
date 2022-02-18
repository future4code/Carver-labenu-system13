import { app } from "./app";
import { changeStudentClass } from "./endpoints/students/changeClassStudent";
import { createTeacher } from "./endpoints/createTeacher";
import { createStudent } from "./endpoints/students/createStudent";
import { getStudentByName } from "./endpoints/students/getStudentByName";
import { createHobbie } from "./endpoints/hobbies/createHobbie";



app.post("/students", createStudent)
app.put("/students/class", changeStudentClass)
app.get("/students", getStudentByName)

app.post("/teachers", createTeacher)

app.post("/students/hobbies", createHobbie)