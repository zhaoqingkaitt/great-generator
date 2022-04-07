/**
 * 公共配置数据,
 * 二次开发时，方便从自定义数据中，生成随机数据
 */
export class GConfigData{

    private  static config;

    constructor(
        private pseronNames?:Array<String>,
        private dateTimes?:Array<String>,
        private colors?:Array<String>,
        private phones?:Array<String>,
        private emails?:Array<String>,
        private addresss?:Array<String>,
    ) {
    }

    static init(config:GConfigData =  new GConfigData()){
        this.config = config;
    }

}