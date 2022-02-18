export class User {
    protected id = Date.now().toString();
    protected name: string;
    protected email: string;
    public birthDate: string;
    protected classGroup: string;

    constructor(
        name: string,
        email: string,
        birthDate: string,
        classGroup: string
    ) {
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

    public setBirthDate(birthDate: string) {
        this.birthDate = birthDate
    }
}