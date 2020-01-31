// prettier-ignore
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export const isPangram = sentence => {
  sentence = sentence.toLowerCase();
  return alphabet.every(el => sentence.includes(el));
};
