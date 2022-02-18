import { User } from "../user";

export class Student extends User{
    
    constructor(
        id: string,
        name: string,
        email: string,
        birthDate: string,
        classGroup: string
    ) {
        super(
            id,
            name,
            email,
            birthDate,
            classGroup
        )
    }
    
}   