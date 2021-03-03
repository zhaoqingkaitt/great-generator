import {DataGeneratorUtils} from "great-jsutils";

export class GCodeUtils {

    /**
     * 随机字符串
     * @param number：数量
     * @param upperCase：是否大写
     * @param length：长度
     * @param prefix：前缀
     * @param suffix：后缀
     */
    static letter({number = 1, upperCase = true, length = 1, prefix = '', suffix=''} = {}): Array<string> | string {
        return DataGeneratorUtils.letter({size: number, upperCase , length, prefix, suffix});
    }
}
