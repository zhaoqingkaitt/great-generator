export class Shape1 {
    area: number;
    color: string;
    constructor ( name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "pink";
    };

    shoutout() {
        return "I'm " + this.color + " with an area of " + this.area + " cm squared.";
    }
}

var square = new Shape1("square", 20, 20);
console.log( square.shoutout() );
console.log( 'Area of Shape: ' + square.area );
console.log( 'Color of Shape: ' + square.color );