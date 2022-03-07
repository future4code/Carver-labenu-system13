export class Class {
    private id = Date.now().toString();
    private name: string;
    private module: string;

    constructor( 
        name: string,
        module: string
    ) {
        this.name = name,
        this.module = module
    }
    
    public getId(): string{
        return this.id
    }
    
    public getName(): string{
        return this.name
    } 

    public getModule(): string{
        return this.module
    }
}