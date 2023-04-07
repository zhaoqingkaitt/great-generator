export class GBooleanUtils{

    /**
     * 随机生成boolean值，默认为1个(返回一个时，返回值不为数组)
     * @param number：生成的boolean值数量
     */
    static  random(
        {
            number = 1
        }={}
    ){
        if(number==1){
            return Math.random() > 0.5;
        }else {
            const result = new Array();
            for (let i = 0; i < number; i++) {
                const flag = Math.random() > 0.5;
                result.push(flag);
            }
            return result;
        }
    }
}
