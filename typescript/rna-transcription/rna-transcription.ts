interface HashTable<T> {
  [key: string]: T;
}

// const DNAtoRNA: any = {
const DNAtoRNA: HashTable<string> = {
  G: "C",
  C: "G",
  T: "A",
  A: "U",
};

class Transcriptor {
  toRna(letters: string): string {
    let RNAoutput: string = "";

    [...letters].forEach((letter) => {
      if (!(letter in DNAtoRNA)) {
        throw new Error("Invalid input DNA.");
      }
      RNAoutput += DNAtoRNA[letter];
    });
    return RNAoutput;
  }
}

export default Transcriptor;
