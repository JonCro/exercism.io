export class Matrix {
  constructor(str) {
    this.matrix = str.split('\n').map(row => row.split(' ').map(Number));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    let cols = [];
    this.matrix.map(row =>
      row.map((el, i) => {
        if (!cols[i]) {
          cols[i] = [];
        }
        cols[i].push(el);
      })
    );
    return cols;
  }
}
