import {UserModel} from "./model/user-model";
import {GContactUtils} from "./g-contact-utils";
import {GDepartmentUtils} from "../org/g-department-utils";
import {GOrganizationUtils} from "../org/g-organization-utils";
import {CommonUtils} from "great-jsutils";

const {DataGeneratorUtils} = require('great-jsutils');

export class GPersonUtils {

    static randomName({number=1}={}){
        return DataGeneratorUtils.personName({size: number});
    }

    static randomUser({number=1}={}){
        number = number>=1?number:1;
        const userList:Array<UserModel> = [];
        for (let i=0;i<number;i++){
            const user = new UserModel();
            user.id = CommonUtils.uuid();
            user.username = DataGeneratorUtils.letter({length: 10});
            user.password = DataGeneratorUtils.letter({length: 10});
            user.email = DataGeneratorUtils.email();
            user.name = DataGeneratorUtils.personName();
            user.phone = DataGeneratorUtils.mobile();
            user.address = GContactUtils.address();
            user.deptName = GDepartmentUtils.deptName();
            user.orgName = GOrganizationUtils.orgName();
            userList.push(user);
        }
        return number==1?userList[0]: userList;
    }

}
