export class UserCapacity {
    private id: string;
    private userId: string;
    private capacityId: string;

    constructor(
        id: string,
        userId: string,
        capacityId: string
    ) {
        this.id = id
        this.userId = userId,
        this.capacityId = capacityId
    }
    public getId() {
        return this.id
    }
    public getUserId() {
        return this.userId
    }
    public getCapacityId() {
        return this.capacityId
    }
}