const {DataGeneratorUtils} = require('great-jsutils');

export class GPersonUtils {

    static randomName({size=1}={}){
        return DataGeneratorUtils.personName({size});
    }

}
