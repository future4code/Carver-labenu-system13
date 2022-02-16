import { UserCapacity } from "../userCapacity";

export class TeachersCapacity extends UserCapacity {

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