function solution(word) {
  word_dict = [];
  function make_word(curWord) {
    if (curWord.length != 0) word_dict.push(curWord);
    if (curWord.length == 5) return;

    const vowel = ["A", "E", "I", "O", "U"];
    for (let v of vowel) {
      make_word(curWord + v);
    }
  }
  make_word("");
  return word_dict.indexOf(word) + 1;
}
