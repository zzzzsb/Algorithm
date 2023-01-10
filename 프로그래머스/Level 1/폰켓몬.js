function solution(nums) {
  const map = new Map();
  for (let num of nums) {
    if (!map.get(num)) {
      map.set(num, 1);
    } else {
      let newValue = map.get(num) + 1;
      map.set(num, newValue);
    }
  }
  console.log(map.size);
  if (map.size >= nums.length / 2) {
    return nums.length / 2;
  } else {
    return map.size;
  }
}
