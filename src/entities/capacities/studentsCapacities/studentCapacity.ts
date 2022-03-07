import { UserCapacity } from "../userCapacity";

export class StudentCapacity extends UserCapacity {

    constructor(
        id: string,
        userId: string,
        capacityId: string
    ) {
        super(
            id,
            userId,
            capacityId
        )
    }
}