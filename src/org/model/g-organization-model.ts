import {GCommonModel} from "../../model/g-common-model";

export class GOrganizationModel extends GCommonModel{

    constructor(
        // 机构名称
        public orgName?:string,
        public orgCode?:string,
        public orgFullName?:string,
        public orgShortName?:string,
        public parentId?:string,
        public address?:string,
        public phone?:string,
        // 联系人
        public contacts?:string,
        public children?:GOrganizationModel[],
    ) {
        super();
    }
}
