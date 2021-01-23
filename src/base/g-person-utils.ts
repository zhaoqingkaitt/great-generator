import {UserModel} from "./model/user-model";

const {DataGeneratorUtils} = require('great-jsutils');

export class GPersonUtils {

    static randomName({number=1}={}){
        return DataGeneratorUtils.personName({size: number});
    }

    static randomUser({number=1}={}){
        number = number>=1?number:1;
        const userList = [];
        for (let i=0;i<number;i++){
            const user = new UserModel();
            user.username = DataGeneratorUtils.letter({length: 10});
            user.password = DataGeneratorUtils.letter({length: 10});
            user.email = DataGeneratorUtils.email();
            user.name = DataGeneratorUtils.personName();
        }
        return number==1?userList[0]: userList;
    }

}
