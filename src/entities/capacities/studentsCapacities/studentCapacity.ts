import { UserCapacity } from "../userCapacity";

export class StudentCapacity extends UserCapacity {

    constructor(
        userId: string,
        capacityId: string
    ) {
        super(
            userId,
            capacityId
        )
    }
}