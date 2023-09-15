class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }
  static titleize(string) {
    const noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');
    const newString = words.map((word, index) => {
      if (index === 0 || !noCap.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });
    return newString.join(' ');
  }
}