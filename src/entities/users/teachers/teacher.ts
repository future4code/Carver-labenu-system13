import { User } from "../user";

export class Teacher extends User {

    constructor(
        name: string,
        email: string,
        birthDate: string,
        classGroup: string
    ) {
        super(
            name,
            email,
            birthDate,
            classGroup
        )
    }
}   