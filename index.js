class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(str) {
    let words = str.split(' ');
    const excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    // capitalize the first word
    words[0] = this.capitalize(words[0]);

    for (let i = 1; i < words.length; i++) {
      if (!excludedWords.includes(words[i])) {
        words[i] = this.capitalize(words[i]);
      }
    }

    return words.join(' ');
  }
}
