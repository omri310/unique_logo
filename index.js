const inquirer = require("inquirer");
const Circle = require("./lib/circle")
const Square = require("./lib/square")
const Traingle = require("./lib/triangle")
const Svg = require("./lib/logo")
const fs = require("fs")
init()
function init() {
    inquirer.prompt([
        {
            type: "list",
            message: "Select Shape",
            choices: ["Circle", "Triangle", "Square"],
            name: "myshape"
        },
        {
            type: "list",
            message: "Select Shape Color",
            choices: ["Red", "Green", "Yellow"],
            name: "myshapeColors"
        },
        {
            type: "input",
            message: "Enter Logo Text",
            name: "mytext"
        },
        {
            type: "list",
            message: "Select Text Color",
            choices: ["Blue", "Black", "White"],
            name: "mytextcolor"
        }
    ]).then(response => {
        console.log(response)
        let myLogoShape = ""
        switch (response.myshape) {
            case "Circle":
                myLogoShape = new Circle()
                myLogoShape.setShapeColor(response.myshapeColors)
                logoCreation(myLogoShape,response.mytext,response.mytextcolor)
                break;
            case "Traingle":
                myLogoShape = new Traingle()
                myLogoShape.setShapeColor(response.myshapeColors)
                logoCreation(myLogoShape,response.mytext,response.mytextcolor)
                break;
            case "Sqaure":
                myLogoShape = new Square()
                myLogoShape.setShapeColor(response.myshapeColors)
                logoCreation(myLogoShape,response.mytext,response.mytextcolor)
        }

    })

}


function logoCreation(myLogoShape,logoText,logoColor){
    const logoSetup = new Svg();
    logoSetup.setShapeObject(myLogoShape)
    logoSetup.setTextObject(logoText,logoColor)
    fs.writeFileSync("Logo.svg",logoSetup.render(),function(err){
        if(err) throw err
    })
} 