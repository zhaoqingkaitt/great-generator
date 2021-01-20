// const {DataGeneratorUtils} = require('great-jsutils');
import {DataGeneratorUtils} from "great-jsutils";

/**
 * 联系方式
 */
export class GContactUtils {


    /**
     * 手机号
     * @param number：生成几条
     */
    static mobile({number=1}={}){
        return DataGeneratorUtils.mobile({size: number});
    }


    /**
     * 邮箱
     * @param number：生成几条
     */
    static email({number=1}={}){
        return '开发中……';
    }

    /**
     * 联系地址
     * @param number：生成几条
     */
    static address({number=1}={}){
        return '开发中……';
    }
}
