const Triangle = require('../lib/triangle.js');



describe('Triangle', () => {
    test('should render circle with given color', () => {
        const myTestTriangle = new Triangle
        myTestTriangle.setShapeColor("black")

        expect(myTestTriangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="black" />`);
  });
});