import {DataGeneratorUtils} from "great-jsutils";
import {GContactUtils} from "../base/g-contact-utils";
import {GDepartmentModel} from "./model/g-department-model";

export class GDepartmentUtils {

    static deptName(){
        const deptNameList = ['开发部', '测试部', 'UI部', '研发管理部', '产品部', '办公室', '市场部', '商务部'];
        return DataGeneratorUtils.getElementByArray(deptNameList);
    }

    static dept({number = 1}){
        number = number>=1?number:1;
        const orgList:Array<GDepartmentModel> = [];
        for (let i=0;i<number;i++){
            const dept = new GDepartmentModel();
            org.deptName = this.deptName();
            org.deptCode = DataGeneratorUtils.letter({length: 10});
            dept.phone = DataGeneratorUtils.mobile();
            dept.address = GContactUtils.address();
            orgList.push(dept);
        }
        return number==1?orgList[0]: orgList;
    }
}
