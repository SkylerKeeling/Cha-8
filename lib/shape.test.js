const {Triangleriangle, Circle, Square} = require("./shape")

describe("Square test", () => {
  test("test for a square with a purple background", () => {
    const shape = new Square()
    shape.setColor("purple")
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="purple" />'
    )
  })
})
