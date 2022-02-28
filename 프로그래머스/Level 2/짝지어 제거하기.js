/*
N: s.length
time: O(N)
space: O(N)
*/
function solution(s) {
	let stack = [s[0]];
	for (let i = 1; i < s.length; i++) {
		if (stack[stack.length - 1] === s[i]) stack.pop();
		else stack.push(s[i]);
	}

	return stack.length ? 0 : 1;
}

/*
효율성 테스트 통과 x
*/
function solution(s){
  let sArr = s.split('');
  let idx = 0;
  while(idx<sArr.length){
      if(sArr[idx]===sArr[idx+1]){
          sArr.splice(idx, 2);
          idx=0;
          continue;
      }
      idx++;
  }
  return sArr.length === 0 ? 1 : 0;
}