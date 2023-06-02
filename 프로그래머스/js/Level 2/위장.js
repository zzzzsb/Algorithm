function solution(clothes) {
  var answer = 1;
  const map = new Map();
  for (let c of clothes) {
    if (!map.has(c[1])) {
      map.set(c[1], [c[0]]);
    } else {
      map.get(c[1]).push(c[0]);
    }
  }
  //console.log(map)
  for (let key of map.keys()) {
    answer *= map.get(key).length + 1;
  }
  return answer - 1;
}
