const Circle = require('../lib/circle.js');


describe('Circle', () => {
    test('should render circle with given color', () => {
        const myTestCircle = new Circle
        myTestCircle.setShapeColor("blue")

        expect(myTestCircle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue"/>`);
  });
});