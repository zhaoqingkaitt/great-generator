const {NumberUtils} = require('great-jsutils');

export class GNumberUtils {

    /**
     * 随机生成一组整数值
     * @param max：最大值，默认为10
     * @param min：最小值，默认为0
     * @param number：个数，默认为1
     */
    public static randomInt({max = 10, min = 0, number = 1} = {}): number | Array<number> {
        return NumberUtils.randomInt({max, min, number});
    }

    /**
     * 随机生成一组浮点数值
     * @param max：最大值，默认为10
     * @param min：最小值，默认为0
     * @param number：个数，默认为1
     */
    public static randomFloat({max = 10, min = 0, number = 1} = {}): number | Array<number> {
        return NumberUtils.randomFloat({max, min, number});
    }
}
