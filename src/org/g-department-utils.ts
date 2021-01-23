import {DataGeneratorUtils} from "great-jsutils";

export class GDepartmentUtils {

    static deptName(){
        const deptNameList = ['开发部', '测试部', 'UI部', '研发管理部', '产品部', '办公室', '市场部', '商务部'];
        return DataGeneratorUtils.getElementByArray(deptNameList);
    }
}
