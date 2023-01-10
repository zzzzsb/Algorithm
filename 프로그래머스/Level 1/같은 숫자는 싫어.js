function solution(arr) {
  let stack = [];
  while (arr.length) {
    let num = arr.pop();
    if (num !== stack[stack.length - 1]) stack.push(num);
  }
  return stack.reverse();
}
