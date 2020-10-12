interface Size {
  x: number;
  y: number;
}

class Matrix {
  private theMatrix: number[][] = [[]];
  public rows: number[][] = [[]];
  public columns: number[][] = [];

  private size: Size = {
    x: 0,
    y: 0,
  };

  constructor(matrixString: string) {
    this.size.x = matrixString.split("\n").length;
    this.size.y = matrixString.split("\n")[0].split(" ").length;

    // First approach would be for inside a for both using the split to get the number of columns
    // O(n^2) 🤮
    // also takes care of the rows already
    for (let x = 0; x < this.size.x; x++) {
      this.theMatrix[x] = [];
      this.rows[x] = [];
      const xString: string[] = matrixString.split("\n")[x].split(" ");
      for (let y = 0; y < this.size.y; y++) {
        const yString = xString[y];

        this.theMatrix[x][y] = parseInt(yString);

        this.rows[x][y] = parseInt(yString);
      }
    }

    // second approach: linear?
    // O(n) 👍🏻

    for (let i = 0; i < this.size.x; i++) {
      this.theMatrix[i] = Array(this.size.y);
    }

    let row = 0;
    let col = 0;
    let value = "";
    for (let i = 0; i < matrixString.length; i++) {
      value += matrixString[i];

      if (matrixString[i] == " ") {
        this.theMatrix[row][col] = parseInt(value);
        col++;
        value = "";
      }
      // if changed line or its the last one (because doesnt have a "\n" after)
      if (matrixString[i] == "\n" || matrixString.length === i + 1) {
        this.theMatrix[row][col] = parseInt(value);
        row++;
        col = 0;
        value = "";
      }
    }

    // does the columns by inverting x and y
    for (let y = 0; y < this.size.y; y++) {
      const tempCol = Array();
      for (let x = 0; x < this.size.x; x++) {
        tempCol.push(this.theMatrix[x][y]);
      }
      this.columns.push(tempCol);
    }
  }
}

export default Matrix;

console.log(new Matrix("1 2 3\n4 5 6\n7 8 9\n8 7 6").rows);
const m = new Matrix("1 2\n3 4");
console.log(m.rows);
console.log(m.columns);
