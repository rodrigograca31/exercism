class Words {
  constructor() {}

  count = (phrase: string): Map<string, number> => {
    const counter = new Map<string, number>();

    phrase
      .toLowerCase()
      .trim()
      .split(/\n|\t| +/) // + Means “one or more”, the same as {1,}
      .forEach((word) => {
        if (counter.has(word)) {
          counter.set(word, (counter.get(word) || 1) + 1);
        } else {
          counter.set(word, 1);
        }
      });

    return counter;
  };
}
export default Words;
