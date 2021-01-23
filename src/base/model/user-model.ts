import {GCommonModel} from "../../model/g-common-model";

export class UserModel extends GCommonModel{
    constructor(
        public username?: string,
        public password?: string,
        public deptName?: string,
        public orgName?: string,
    ) {
        super();
    }
}
