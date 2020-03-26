function countWords(text) {
  const words = text.match(/\w+/g);
  return text ? (words ? words.length : 0) : 0;
}

export default countWords;
