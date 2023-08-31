const inquirer = require("inquirer")
const {writeFile} = require("fs").promises
const {Circle} = require("./lib/shape")
const {Square} = require("./lib/shape")
const {Triangle} = require("./lib/shape")
const SVG = require("./lib/SVG")

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter three characters:",
    },
    {
      type: "list",
      name: "textColor",
      message: "Choose color for text:",
      choices: [
        "White",
        "Black",
        "Grey",
        "Yellow",
        "Red",
        "Blue",
        "Green",
        "Brown",
        "Pink",
        "Orange",
        "Purple",
      ],
    },
    {
      type: "list",
      name: "color",
      message: "Choose a color for the shape:",
      choices: [
        "White",
        "Black",
        "Grey",
        "Yellow",
        "Red",
        "Blue",
        "Green",
        "Brown",
        "Pink",
        "Orange",
        "Purple",
      ],
    },
    {
      type: "list",
      name: "shapeChosen",
      message: "Choose a shape:",
      choices: ["Square", "Circle", "Triangle"],
    },
  ])
}

function init() {
  questions()
    .then(answers => {
      let shape
      if (answers.shapeChosen === "Circle") {
        shape = new Circle()
      }
      if (answers.shapeChosen === "Square") {
        shape = new Square()
      }
      if (answers.shapeChosen === "Triangle") {
        shape = new Triangle()
      }
      shape.setColor(answers.color)
      let newSVG = new SVG()
      newSVG.setText(answers.text, answers.textColor)
      newSVG.setShape(shape)
      writeFile("SVG.svg", newSVG.render())
    })
    .then(() => console.log("Successfully completed SVG Icon"))
    .catch(err => console.error(err))
}

init()
