export class IdGenerator {
    private id: string
    constructor() {
        this.id = Date.now(). toString()
    }
    public getId() {
        return this.id
    }
}