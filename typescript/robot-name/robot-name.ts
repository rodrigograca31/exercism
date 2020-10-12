class RobotName {
  public name: string = "";

  private generatedNames = new Set<string>();

  constructor() {
    this.name = this.generateName();
  }

  resetName = () => {
    let theName = "";
    // keeps generating names if they are not unique
    do {
      theName = this.generateName();
    } while (this.generatedNames.has(theName));

    this.generatedNames.add(theName);
    this.name = theName;
  };

  /**
   * generates a random name string
   * shape: "AA123"
   * @returns string
   */
  private generateName = (): string => {
    // use .toString() on all to avoid turning 0 into nothing

    return (
      String.fromCharCode(this.randomInt(65, 90)) +
      String.fromCharCode(this.randomInt(65, 90)) +
      this.randomInt(0, 9).toString() +
      this.randomInt(0, 9).toString() +
      this.randomInt(0, 9).toString()
    );
  };

  /**
   * Generates a random integer between min and max (inclusive)
   * https://gist.github.com/ValeryToda/fbf1de017f91c0ec3da04116c5ccf8b5
   * @param  {number} min
   * @param  {number} max
   * @returns random generated integer
   */
  private randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
}

export default RobotName;

const robot1 = new RobotName();
console.log(robot1.name);
