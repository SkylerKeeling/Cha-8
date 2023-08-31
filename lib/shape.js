class Shape {
  constructor() {
    this.color = ""
  }
  setColor(selectedColor) {
    this.color = selectedColor
  }
}

class Circle extends Shape {
  render() {
    return `<circle x="0" y="0" cx="50" cy="50" r="40" stroke-width="4" fill="${this.color}" />`
  }
}

class Square extends Shape {
  render() {
    return `<rect x="0" y="0" height="100" width="100" fill="${this.color}" />`
  }
}

class Triangle extends Shape {
  render() {
    return `<rect x="0" y="0" height="100" width="300" fill="${this.color}" />`
  }
}

module.exports = {Circle, Square, Triangle}
