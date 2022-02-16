export class CapacityDetail {
    private id = Date.now().toString();
    private name: string;

    constructor(
        name:string
    ) {
        this.name = name
    }

    public getCapacityID() {
        return this.id
    }
    public getCapacityName() {
        return this.name
    }
}