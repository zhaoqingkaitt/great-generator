import {DataGeneratorUtils} from "great-jsutils";
import {UserModel} from "../base/model/user-model";
import {GContactUtils} from "../base/g-contact-utils";
import {GOrganizationModel} from "./model/g-organization-model";

export class GOrganizationUtils {

    static orgName(){
        const orgNameList = ['山东**总公司', '北京**总公司','河北**总公司', '内蒙古****总公司', '山东济南**总公司'];
        return DataGeneratorUtils.getElementByArray(orgNameList);
    }

    static org({number = 1}){
        number = number>=1?number:1;
        const orgList:Array<UserModel> = [];
        for (let i=0;i<number;i++){
            const org = new GOrganizationModel();
            org.name = DataGeneratorUtils.personName();
            org.orgCode = DataGeneratorUtils.letter({length: 10});
            org.phone = DataGeneratorUtils.mobile();
            org.address = GContactUtils.address();
            org.orgName = GOrganizationUtils.orgName();
            orgList.push(org);
        }
        return number==1?orgList[0]: orgList;
    }

}
