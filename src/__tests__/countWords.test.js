import countWords from '../components/WordCounter/countWords';

describe('the counting function', () => {
  it('counts the correct number of words', () => {
    expect(countWords('One two three')).toBe(3);
  });

  it('counts an empty string', () => {
    expect(countWords('')).toBe(0);
  });

  it('counts non-word characters', () => {
    expect(countWords('!')).toBe(0);
  });
});
