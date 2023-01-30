export class GBooleanUtils{

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
