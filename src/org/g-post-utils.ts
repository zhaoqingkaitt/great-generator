import {CommonUtils, DataGeneratorUtils} from "great-jsutils";
import {GContactUtils} from "../base/g-contact-utils";
import {GPostModel} from "./model/g-post-model";

export class GPostUtils {

    static postName(){
        const postNameList = ['销售总监','销售经理','区域销售经理','软件工程师','系统管理员','网络工程师','行政总监','首席执行官','人力资源总监'];
        return DataGeneratorUtils.getElementByArray(postNameList);
    }

    static post({number = 1}){
        number = number>=1?number:1;
        const postList:Array<GPostModel> = [];
        for (let i=0;i<number;i++){
            const post = new GPostModel();
            post.id = CommonUtils.uuid();
            post.deptName = this.postName();
            post.deptCode = DataGeneratorUtils.letter({length: 10}) as string;
            post.phone = DataGeneratorUtils.mobile();
            post.address = GContactUtils.address();
            postList.push(post);
        }
        return number==1?postList[0]: postList;
    }
}
