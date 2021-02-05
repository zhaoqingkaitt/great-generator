import {CommonUtils, NumberUtils} from "great-jsutils";
import {GOrganizationUtils} from "../org/g-organization-utils";

export class GTreeUtils {

    static tree({maxLevel = 5, minLevel = 1, maxNum = 5} = {}) {
        const nodes = [];
        const level = NumberUtils.randomInt({min: minLevel, max: maxLevel}) as number;
        const num = NumberUtils.randomInt({max: maxNum});
        for(let i =0;i<num;i++){
            const node = this.generatorNode({currentLevel: i, maxLevel: level});
            // @ts-ignore
            nodes.push(node);
        }
        return nodes;
    }

    private static generatorNode(
        {
            parentId = '',
            maxLevel = 1,
            currentLevel = 1,
            maxNum = 5
        } = {}
        ){
        const id = CommonUtils.uuid() as string;
        const node = {id, name: GOrganizationUtils.orgName(), parentId, children: [], isLeaf: true};
        if(maxLevel > currentLevel){
            const children = [];
            const num = NumberUtils.randomInt({max: maxNum});
            for(let j =0;j<num;j++){
                const cnode = this.generatorNode({parentId : id, maxLevel, currentLevel : currentLevel+1, maxNum : 5});
                // @ts-ignore
                children.push(cnode);
            }
            node.isLeaf = false;
            node.children = children;
        }else{
            // @ts-ignore
            delete  node.children;
        }
        if(!node.parentId){
            // @ts-ignore
            delete  node.parentId;
        }
        return node;
    }


}

export class TreeKeysCfg {
    constructor(
        public idKey: string,
        public nameKey: string,
        public parentIdKey: string,
        public childrenKey: string,
        // 生成几层节点
        public maxLevel: number,
        public minLevel: number,
        // 每层节点数量
        public maxNum: number,
        public minNum: number,
    ) {
    }
}
