function solution(arr) {
  if (arr.length === 1) return [-1];

  let min = Number.MAX_VALUE;
  let minIdx;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      minIdx = i;
    }
  }
  arr.splice(minIdx, 1);
  return arr;
}
