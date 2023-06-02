function solution(participant, completion) {
  const map = new Map();
  for (let p of participant) {
    if (map.has(p)) {
      map.set(p, map.get(p) + 1);
    } else {
      map.set(p, 1);
    }
  }

  for (c of completion) {
    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
    }
  }

  for (let [p, num] of map) {
    if (num > 0) return p;
  }
}
