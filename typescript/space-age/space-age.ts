class SpaceAge {
  // "public" to be accessible like so: new SpaceAge().seconds
  public seconds: number = 0;
  private oneYearInSeconds: number = 24 * 60 * 60 * 365.25;

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  /**
   * Does `parseFloat` and `toFixed` in one single place
   *
   * @param  {number} years
   * @returns number
   */
  private format = (years: number): number => {
    // toFixed rounds up, to round down we use Math.floor but seems it has problem in certain cases:
    // https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
    // return Math.floor((years + Number.EPSILON) * 100) / 100;
    return parseFloat(years.toFixed(2));
  };

  onEarth = (): number => {
    return this.format(this.seconds / this.oneYearInSeconds);
  };

  onMercury = (): number => {
    return this.format(this.onEarth() / 0.2408467);
  };
  onVenus = (): number => {
    return this.format(this.onEarth() / 0.61519726);
  };
  onMars = (): number => {
    return this.format(this.onEarth() / 1.8808158);
  };
  onJupiter = (): number => {
    return this.format(this.onEarth() / 11.862615);
  };
  onSaturn = (): number => {
    return this.format(this.onEarth() / 29.447498);
  };
  onUranus = (): number => {
    return this.format(this.onEarth() / 84.016846);
  };
  onNeptune = (): number => {
    return this.format(this.onEarth() / 164.79132);
  };
}

export default SpaceAge;
