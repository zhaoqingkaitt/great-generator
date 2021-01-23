const {NumberUtils, DataGeneratorUtils} = require('great-jsutils');

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
        return DataGeneratorUtils.email({size: number});;
    }

    /**
     * 联系地址
     * @param number：生成几条
     */
    static address({number=1}={}){
        const provinceList = ['山东省','A**省', 'B**省', 'C**省', 'D**省', 'F**省'];
        const cityList = ['济南市','德州市', '青岛市', '济宁市', '淄博市', '威海市'];
        const districtList = ['高新区','槐荫区', '市中区', '天桥区', '历下区', '历程区'];
        const villageList = ['百花小区','东方花园', '万达广场', '济南万科城', '泉城花园', '保利华庭'];
        return DataGeneratorUtils.getElementByArray(provinceList) +
            DataGeneratorUtils.getElementByArray(cityList) +
            DataGeneratorUtils.getElementByArray(districtList) +
            DataGeneratorUtils.getElementByArray(villageList) +
            NumberUtils.randomInt({min: 1}) + '号楼'+
            NumberUtils.randomInt({min: 1}) + '单元'+
            NumberUtils.randomInt({min: 111});
    }
}
