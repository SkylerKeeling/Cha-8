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
    return `<circle cx="125" cy="125" r="40" stroke-width="4" fill="${this.color}" />`
  }
}

class Square extends Shape {
  render() {
    return `<rect x="75" y="75" height="100" width="100" fill="${this.color}" />`
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" x="90" y="40" height="100" width="300" fill="${this.color}" />`
  }
}

module.exports = {Circle, Square, Triangle}
