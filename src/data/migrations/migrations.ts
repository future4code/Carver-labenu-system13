import { BaseDatabase } from "../BaseDatabase"
import classGroup from "./classGroup.json"
import students from "./students.json"
import teachers from "./teachers.json"
import hobbies from "./hobbies.json"
import specialties from "./specialties.json"
import studentsHobbies from "./studentsHobbies.json"
import teachersSpecialties from "./teachersSpecialties.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => BaseDatabase.connection
    .raw(`

    CREATE TABLE IF NOT EXISTS labenu_system_class(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255),
        module VARCHAR(255) default 0
    );


    CREATE TABLE IF NOT EXISTS labenu_system_teachers(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        birth_date DATE NOT NULL,
        id_class VARCHAR(255),
        FOREIGN KEY (id_class) REFERENCES labenu_system_class(id)
    );

    CREATE TABLE IF NOT EXISTS labenu_system_specialty(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS labenu_system_teachers_specialty (
        id VARCHAR(255) PRIMARY KEY,
        teacher_id VARCHAR(255),
        specialty_id VARCHAR(255),
        FOREIGN KEY (teacher_id) REFERENCES labenu_system_teachers(id),
        FOREIGN KEY (specialty_id) REFERENCES labenu_system_specialty(id)
    );

    CREATE TABLE IF NOT EXISTS labenu_system_students(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        birth_date DATE NOT NULL,
        id_class VARCHAR(255),
        FOREIGN KEY (id_class) REFERENCES labenu_system_class(id)
    );

    CREATE TABLE IF NOT EXISTS labenu_system_hobbies(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS labenu_system_students_hobbies (
        id VARCHAR(255) PRIMARY KEY,
        studant_id VARCHAR(255),
        hobby_id VARCHAR(255),
        FOREIGN KEY (studant_id) REFERENCES labenu_system_students(id),
        FOREIGN KEY (hobby_id) REFERENCES labenu_system_hobbies(id)
    );
`)

    .then(() => { console.log("Tables has been created!") })
    .catch(printError)

const insertClass = () => BaseDatabase.connection("labenu_system_class")
    .insert(classGroup)
    .then(() => { console.log("Classes has been created!") })
    .catch(printError)

const insertStudents = () => BaseDatabase.connection("labenu_system_students")
    .insert(students)
    .then(() => { console.log("Students has been created!") })
    .catch(printError)

const insertTeachers = () => BaseDatabase.connection("labenu_system_teachers")
    .insert(teachers)
    .then(() => { console.log("Teachers has been created!") })
    .catch(printError)

const insertHobbies = () => BaseDatabase.connection("labenu_system_hobbies")
    .insert(hobbies)
    .then(() => { console.log("Hobbies has been created!") })
    .catch(printError)

const insertSpecialties = () => BaseDatabase.connection("labenu_system_specialty")
    .insert(specialties)
    .then(() => { console.log("Specialties has been created!") })
    .catch(printError)

const insertStudentsHobbies = () => BaseDatabase.connection("labenu_system_students_hobbies")
    .insert(studentsHobbies)
    .then(() => { console.log("Students's hobbies has been created!") })
    .catch(printError)

const insertTeachersSpecialties = () => BaseDatabase.connection("labenu_system_teachers_specialty")
    .insert(teachersSpecialties)
    .then(() => { console.log("Teachers's specialties has been created!") })
    .catch(printError)


const closeConnection = () => { BaseDatabase.connection.destroy() }

createTables()
   .then(insertClass)
   .then(insertStudents)
   .then(insertTeachers)
   .then(insertHobbies)
   .then(insertSpecialties)
   .then(insertStudentsHobbies)
   .then(insertTeachersSpecialties)
   .finally(closeConnection)