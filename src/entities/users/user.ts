import { IdGenerator } from "../../services/idGenerator/idGenerator";

export class User {
    protected id: string;
    protected name: string;
    protected email: string;
    protected birthDate: string;
    protected classGroup: string;

    constructor(
        id: string,
        name: string,
        email: string,
        birthDate: string,
        classGroup: string
    ) {
            this.id = id,
            this.name = name,
            this.email = email,
            this.birthDate = birthDate,
            this.classGroup = classGroup
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getEmail(): string {
        return this.email
    }

    public getBirthDate(): string {
        return this.birthDate
    }

    public getClassGroup(): string {
        return this.classGroup
    }

     setBirthDate(birthDate: string) {
        this.birthDate = birthDate
    }
}