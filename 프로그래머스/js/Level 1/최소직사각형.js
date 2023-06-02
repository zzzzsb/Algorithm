function solution(sizes) {
  var answer = 0;
  let maxW = 0,
    maxH = 0;
  for (let size of sizes) {
    if (size[0] < size[1]) {
      let temp = size[0];
      size[0] = size[1];
      size[1] = temp;
    }
  }
  for (let size of sizes) {
    if (size[0] > maxW) maxW = size[0];
    if (size[1] > maxH) maxH = size[1];
  }
  return maxW * maxH;
}
