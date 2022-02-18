export class User {
    private id = Date.now().toString();
    private name: string;
    private email: string;
    private birthDate: string;
    private classGroup: string;

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
    
    public getId(): string{
        return this.id
    }
    
    public getName(): string{
        return this.name
    } 

    public getEmail(): string{
        return this.email
    } 

    public getBirthDate(): string{
        return this.birthDate
    } 

    public getClassGroup(): string{
        return this.classGroup
    }
    public setBirthDate(birthDate: string) {
        this.birthDate = birthDate
    } 
}