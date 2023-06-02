/*
N: numbers.length
time: O(2^N)
space: O(N) for call stack
*/
function solution(numbers, target) {
	var answer = 0;
	dfs(numbers, 0, 0);

	function dfs(numbers, numIdx, sum) {
		if (numIdx === numbers.length) {
			if (sum === target) answer++;
			return;
		}
		dfs(numbers, numIdx + 1, sum + numbers[numIdx]);
		dfs(numbers, numIdx + 1, sum - numbers[numIdx]);
	}
	return answer;
}