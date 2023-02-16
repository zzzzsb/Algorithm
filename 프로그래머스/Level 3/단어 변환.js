/*
hit -> hot -> dot -> dog -> cog
                  -> lot
           -> lot -> dot
                  -> log

*/
function solution(begin, target, words) {
  let answer = 0;
  let check = new Array(words.length).fill(false);

  dfs(begin, 0);

  function dfs(word, step) {
    if (word == target) {
      if (answer == 0 || answer > step) answer = step;
    }

    for (let i = 0; i < words.length; i++) {
      if (check[i]) continue;
      let diffCnt = 0;
      for (let j = 0; j < words[i].length; j++) {
        if (word[j] != words[i][j]) diffCnt += 1;
      }
      if (diffCnt == 1) {
        check[i] = true;
        dfs(words[i], step + 1);
        check[i] = false;
      }
    }
  }
  return answer;
}
