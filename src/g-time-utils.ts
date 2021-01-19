const {TimeUtils} = require('great-jsutils');

export class GTimeUtils {

    static date({size=1}={}){
        const dates:Array<any> = [];
        for(let i=0;i<size;i++){
            const date = TimeUtils.random();
            dates.push(date);
        }
        return size===1?dates[0]: dates;
    }

    static str({size=1}={}){
        const dates:Array<any> = [];
        for(let i=0;i<size;i++){
            const date = TimeUtils.random();
            const dateStr = TimeUtils.format(date);
            dates.push(dateStr);
        }
        return size===1?dates[0]: dates;
    }
}
