import { app } from "./app";
import { createStudent } from "./endpoints/students/createStudent";
import { Student } from "./entities/users/students/student";
import { User } from "./entities/users/user";

app.post("/students", createStudent)