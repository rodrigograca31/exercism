class Clock {
  private _minutes: number;
  constructor(hour: number = 0, minute: number = 0) {
    this._minutes = minute + hour * 60;
  }
  toString(): string {
    if (this._minutes < 0) {
      // calculates how many days were given as negative
      // adds 1 and multiplies by 1440 (1 day worth of minutes)
      // then subtracts the actual minutes
      // in other words: if its -20 it adds one entire day and it becomes 24:00 - 20 = 23:40
      this._minutes =
        (Math.floor(Math.abs(this._minutes) / 1440) + 1) * 1440 + this._minutes;
    }

    const hour = Math.floor((this._minutes / 60) % 24);
    const minute = this._minutes % 60;
    return `${this._padLeft(hour)}:${this._padLeft(minute)}`;
    return `${hour}:${minute}`;
  }

  private _padLeft(value: number): string {
    // return String(value).padStart(2, "0");

    // if (value < 10) {
    //   return `0${value}`;
    // } else {
    //   return value;
    // }

    return (value < 10 ? `0` : ``) + value;
  }

  plus = (value: number): Clock => {
    this._minutes += value;
    return this;
  };

  minus = (value: number): Clock => {
    this._minutes -= value;
    return this;
  };

  equals = (clock: Clock): boolean => {
    // console.log(clock);
    return clock.toString() === this.toString();
  };
}

export default Clock;
