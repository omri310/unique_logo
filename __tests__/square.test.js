const Square = require('../lib/square.js');



describe('Square', () => {
    test('should render circle with given color', () => {
        const myTestSquare = new Square
        myTestSquare.setShapeColor("brown")

        expect(myTestSquare.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="brown"/>`);
  });
});