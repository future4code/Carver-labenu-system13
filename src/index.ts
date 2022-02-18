import { app } from "./app";
import { createTeacher } from "./endpoints/createTeacher";
import { createStudent } from "./endpoints/students/createStudent";
import { Student } from "./entities/users/students/student";
import { User } from "./entities/users/user";

app.post("/teachers", createTeacher)
app.post("/students", createStudent)