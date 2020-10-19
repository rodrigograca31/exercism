class Anagram {
  anagram: string = "";

  constructor(anagram: string) {
    this.anagram = anagram.toLowerCase();
  }

  matches = (...words: Array<string>): Array<string> => {
    //   calculated here in order to avoid recalculating for each filter "step"
    // "bca" turns into "abc" (orders it)
    const sortedAnagram = this.anagram.split("").sort().join("");

    return words.filter(
      (word) =>
        word.toLowerCase() !== this.anagram &&
        word.toLowerCase().split("").sort().join("") === sortedAnagram
    );
  };

  /**
   * The intention here was to calculate how many times a given letter was in a string and then compare it with the anagram....
   * this code isnt used anymore
   */
  calcLetters = (word: string) => {
    const mappings = new Map();
    word.split("").forEach((letter) => {
      if (mappings.has(letter)) {
        mappings.set(letter, mappings.get(letter) + 1);
      } else {
        mappings.set(letter, 1);
      }
    });
  };
}

export default Anagram;
