export class Triangle {
  constructor(a, b, c) {
    this.sides = [a, b, c].sort();
    this.sideSet = new Set(this.sides);
  }

  isValid() {
    let [a, b, c] = this.sides;

    return !this.sides.includes(0) && a + b >= c;
  }

  isEquilateral() {
    return this.isValid() && this.sideSet.size == 1;
  }

  isIsosceles() {
    return (this.isValid() && this.sideSet.size == 2) || this.sideSet.size == 1;
  }

  isScalene() {
    return this.isValid() && this.sideSet.size == 3;
  }
}
