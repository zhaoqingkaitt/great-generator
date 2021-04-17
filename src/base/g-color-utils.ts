export class GColorUtils{

    /**
     * 随机生成一个颜色
     */
    static randomColor() {
        const color = `rgb(
                ${Math.round(Math.random() * 255)},
                ${Math.round(Math.random() * 255)},
                ${Math.round(Math.random() * 255)},
                0.5)`;
        return this.colorRGBtoHex(color);
    }

    /**
     * rgb颜色转16进制
     * @param color：rgb颜色值
     */
    static colorRGBtoHex(color) {
        const rgb = color.split(',');
        const r = parseInt(rgb[0].split('(')[1]);
        const g = parseInt(rgb[1]);
        const b = parseInt(rgb[2].split(')')[0]);
        const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return hex;
    }
}
