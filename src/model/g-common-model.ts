/**
 * 公共属性
 */
export class GCommonModel {
    [key: string]: any;
    constructor(
        public id?:string,
        public name?:string,
        public email?: string,
        public phone?: string,
        public address?: string,
    ) {
    }
}
