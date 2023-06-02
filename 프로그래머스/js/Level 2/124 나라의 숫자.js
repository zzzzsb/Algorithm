// 124 나라의 숫자

/*
Solution #1
N: n.length
R: res.length
time: O(logN)
space: O(1) + O(R) for answer 
*/
function solution(n) {
	let res = "";
	res = dfs(n, res);

	return res;
}

function dfs(n, res) {
	let tempQ = parseInt(n / 3);
	let tempR = n % 3;
	if (tempR === 0) {
		tempQ = tempQ - 1;
		tempR = 3;
	}
	if (tempQ >= 3) {
		res = dfs(tempQ, res);
	}

	if (tempR === 3) tempR = 4;

	if (tempQ < 3 && tempQ !== 0) res += tempQ.toString();
	res += tempR.toString();

	return res;
}

/*
Solution #2
time: O(logN)
space: O(R) for result
*/
function change124(n) {
	var src = [4, 1, 2];
  var result = '';
  while(n) {
    result = src[n%3] + result;
    n = Math.floor((n-1)/3);
  }
  return result;
}