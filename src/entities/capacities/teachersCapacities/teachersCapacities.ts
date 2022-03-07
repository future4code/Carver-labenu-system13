import { UserCapacity } from "../userCapacity";

export class TeachersCapacity extends UserCapacity {

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