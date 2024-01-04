import {GCommonModel} from "../../model/g-common-model";

export class GDepartmentModel extends GCommonModel{

    constructor(
        public deptName?:string,
        public deptCode?:string,
        public deptFullName?:string,
        public deptShortName?:string,
        public parentId?:string,
        public level?:number,
        public children?:GDepartmentModel[],
    ) {
        super();
    }
}
