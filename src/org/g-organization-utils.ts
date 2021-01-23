import {DataGeneratorUtils} from "great-jsutils";

export class GOrganizationUtils {

    static randomOrgName(){
        const orgNameList = ['山东**总公司', '北京**总公司','河北**总公司', '内蒙古****总公司', '山东济南**总公司'];
        return DataGeneratorUtils.getElementByArray(orgNameList);
    }

}
