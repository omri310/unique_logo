const Circle = require('../lib/circle.js');
const Logo = require('../lib/logo.js');


describe('Logo', () => {
    test('should render circle with given text ABC', () => {
        const myTestLogo = new Logo()
        const myTestCircle = new Circle()
        myTestCircle.setShapeColor("pink")
        myTestLogo.setTextObject("ABC", "blue")
        myTestLogo.setShapeObject(myTestCircle)

        expect(myTestLogo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="pink"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text></svg>`);
    });
});