import { CapacityDetail } from "../capacityDetails";

export class Specialty extends CapacityDetail {
    constructor(
        id: string,
        name:string
    ) {
        super(id,name)
    }
}