const {DataGeneratorUtils} = require('great-jsutils');

export class GPersonUtils {

    static random({size=1}={}){
        return DataGeneratorUtils.personName({size});
    }

}
