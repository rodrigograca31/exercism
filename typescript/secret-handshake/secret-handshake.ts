class HandShake {
  private _n: number;
  private _event: Array<string> = [
    "wink",
    "double blink",
    "close your eyes",
    "jump",
  ];
  constructor(n: number) {
    this._n = n;
  }
  /**
   * uses the number, turns it into binary, reverses it to go from right to left
   * @return array {string}
   */
  commands = (): Array<string> => {
    const binarySequence = this._n.toString(2).split("").reverse().join("");
    const eventSequence: Array<string> = [];

    // Max at 4 because thats how many events we have
    for (let i = 0; i < Math.min(binarySequence.length, 4); i++) {
      // turn "0" into 0 so that its false. because "0" (string 0) is true
      if (parseInt(binarySequence[i])) {
        eventSequence.push(this._event[i]);
      }
    }

    // 10000 = Reverse the order of the operations in the secret handshake.
    if (this._n >= 16) {
      eventSequence.reverse();
    }

    return eventSequence;
  };
}

export default HandShake;
