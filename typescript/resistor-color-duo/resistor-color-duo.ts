import { Hash } from "crypto";

interface HashTable<T> {
  [key: string]: T;
}

export class ResistorColor {
  private colors: string[];

  // private colorsTable: any;
  private colorsTable: HashTable<number>;

  constructor(colors: string[]) {
    this.colors = colors;
    this.colorsTable = {
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9,
    };
  }
  value = (): number => {
    if (this.colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
    return parseInt(
      this.colorsTable[this.colors[0]] + "" + this.colorsTable[this.colors[1]]
    );
  };
}

// console.log(new ResistorColor(["black"]).value());
console.log(new ResistorColor(["brown", "black"]).value());
