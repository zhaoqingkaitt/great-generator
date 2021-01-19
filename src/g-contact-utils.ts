const {DataGeneratorUtils} = require('great-jsutils');

/**
 * 联系方式
 */
export class GContactUtils {

    static mobile({size=1}={}){
        return DataGeneratorUtils.mobile({size});
    }
}
