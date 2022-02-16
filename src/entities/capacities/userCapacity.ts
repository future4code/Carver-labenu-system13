export class UserCapacity {
    private id = Date.now().toString();
    private userId: string;
    private capacityId: string;

    constructor(
        userId: string,
        capacityId: string
    ) {
        this.userId = userId,
        this.capacityId = capacityId
    }
    public getCapacityId() {
        return this.id
    }
}