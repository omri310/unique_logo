class Svg {
    constructor() {
        this.shapeObject = ""
        this.textObject = ""
    }
    setShapeObject(shape) {
        this.shapeObject = shape.render()
    }
    setTextObject(Text, color) {
        this.textObject = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${Text}</text>`;
    }
    render(){
        return`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeObject}${this.textObject}</svg>`;
    }
}
module.exports=Svg