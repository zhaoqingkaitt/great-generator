const {DataGeneratorUtils} = require('great-jsutils');

/**
 * 联系方式
 */
export class GContactUtils {


    /**
     * 手机号
     * @param size：生成几条
     */
    static mobile({size=1}={}){
        return DataGeneratorUtils.mobile({size});
    }


    /**
     * 邮箱
     * @param size：生成几条
     */
    static email({size=1}={}){
        return '开发中……';
    }

    /**
     * 联系地址
     * @param size：生成几条
     */
    static address({size=1}={}){
        return '开发中……';
    }
}
