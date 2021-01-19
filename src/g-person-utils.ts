const {DataGeneratorUtils} = require('great-jsutils');

export class GPersonUtils {

    static randomName({number=1}={}){
        return DataGeneratorUtils.personName({size: number});
    }

}
