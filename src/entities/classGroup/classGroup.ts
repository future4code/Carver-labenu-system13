export class ClassGroup{
    protected id: string;
    protected name: string;
    protected module: string;

    constructor(id: string, name: string, module: string) {
        this.id = id,
            this.name = name,
            this.module = module
    }
    public getId() {
        return this.id
    }
    public getName() {
        return this.name
    }
    public getModule() {
        return this.module
    }
}