const {TimeUtils} = require('great-jsutils');

export class GTimeUtils {

    /**
     * @param number：个数，默认一个
     */
    static date({number=1}={}){
        number = number>=1?number:1;
        const dates:Array<any> = [];
        for(let i=0;i<number;i++){
            const date = TimeUtils.random();
            dates.push(date);
        }
        return number===1?dates[0]: dates;
    }


    /**
     * @param number：个数，默认一个
     */
    static str({number=1}={}){
        number = number>=1?number:1;
        const dates:Array<any> = [];
        for(let i=0;i<number;i++){
            const date = TimeUtils.random();
            const dateStr = TimeUtils.format(date);
            dates.push(dateStr);
        }
        return number===1?dates[0]: dates;
    }
}
