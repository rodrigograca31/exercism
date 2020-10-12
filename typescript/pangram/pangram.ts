class Pangram {
  private theString: string = "";
  constructor(theString: string) {
    this.theString = theString.toLowerCase();
  }
  isPangram = (): boolean => {
    // First approach: O(n^2) 🤮
    // foreach letter its checking if exists anywhere on the string
    // and thats another for loop
    // for (let ASCIINumber = 0; ASCIINumber < 26; ASCIINumber++) {
    //   let letter = String.fromCharCode(97 + ASCIINumber);
    //   //   console.log("Checking: " + letter);
    //   if (this.theString.indexOf(letter) === -1) {
    //     return false;
    //   }
    // }
    // return true;
    //
    //
    // Second approach: O(n) 👍🏻
    // Iterate once and make a hashtable of all the chars inside the string
    // check the size of the table, if its 25 or more it has all.
    // will need to ignore non letters!

    const CharsHashTable: any = {};
    let letterCount = 0;

    [...this.theString].forEach((letter) => {
      const ASCIINumber: number = letter.charCodeAt(0) - 97;
      // check its a letter (lowercase only because we did toLowerCase())
      if (ASCIINumber >= 0 && ASCIINumber <= 25) {
        // Count each letter only once (if its not in the HashTable)
        if (!(ASCIINumber in CharsHashTable)) {
          letterCount++;
        }
        CharsHashTable[ASCIINumber] = 1;
      }
    });

    return letterCount === 26;
  };
}

export default Pangram;
