import {CommonUtils, DataGeneratorUtils} from "great-jsutils";
import {GContactUtils} from "../base/g-contact-utils";
import {GRoleModel} from "./model/g-role-model";

export class GRoleUtils {

    static roleName(){
        const postNameList = ['系统管理员','超级管理员'];
        return DataGeneratorUtils.getElementByArray(postNameList);
    }

    static role({number = 1}){
        number = number>=1?number:1;
        const postList:Array<GRoleModel> = [];
        for (let i=0;i<number;i++){
            const post = new GRoleModel();
            post.id = CommonUtils.uuid();
            post.deptName = this.roleName();
            post.deptCode = DataGeneratorUtils.letter({length: 10}) as string;
            post.phone = DataGeneratorUtils.mobile();
            post.address = GContactUtils.address();
            postList.push(post);
        }
        return number==1?postList[0]: postList;
    }
}
