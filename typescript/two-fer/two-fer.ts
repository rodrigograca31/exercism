class TwoFer {
  public static twoFer(name: string = ""): string {
    // return "One for " + (name ? name : "you") + ", one for me.";
    return `One for ${name ? name : "you"}, one for me.`;
  }
}

export default TwoFer;
