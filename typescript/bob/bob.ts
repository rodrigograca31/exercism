class Bob {
  hey(phrase: string): string {
    phrase = phrase.trim();

    const hasLetters = phrase.match(/[a-z]/i);

    if (phrase === "") {
      return "Fine. Be that way!";
    } else if (
      phrase.toUpperCase() === phrase &&
      phrase.endsWith("?") &&
      hasLetters
    ) {
      return "Calm down, I know what I'm doing!";
    } else if (phrase.endsWith("?")) {
      return "Sure.";
    } else if (phrase.toUpperCase() === phrase && hasLetters) {
      return "Whoa, chill out!";
    }

    return "Whatever.";

    // switch (type) {
    //   case "?":
    //     return "Sure.";
    //   case "!":
    //     return "Whoa, chill out!";
    //   case "":
    //     return "Fine. Be that way!";
    //   case "wtf":
    //     return "Calm down, I know what I'm doing!";
    //   default:
    //     return "Whatever.";
    // }
  }
}

export default Bob;
