/*
P: 사람
O: 빈테이블
X: 파티션

"POOPX", 
"OXPXP", 
"PXXXO", 
"OXXXO", 
"OOOPP"

    P
  P P P
P P P P P 
  P P P
    P
    
P에서 거리 2 내에 P가 있는지 없는지 검사
이때 X를 만나면 진행하지 않음

*/
const n = 5;
const dir = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function solution(places) {
  var answer = [];
  return places.reduce(start, []);
}

function outOfRange(x, y) {
  if (x < 0 || x >= n || y < 0 || y >= n) return true;
  else return false;
}

function bfs(place, i, j) {
  const check = Array.from(Array(5), () => new Array(5).fill(false));
  const queue = [];
  check[i][j] = true;
  queue.push([i, j]);
  let depth = 2;

  while (queue.length && depth--) {
    let len = queue.length;
    while (len--) {
      const [i, j] = queue.shift();
      dir.forEach((v) => {
        const [dx, dy] = v;
        const [nx, ny] = [i + dx, j + dy];
        if (outOfRange(nx, ny) || check[nx][ny] || place[nx][ny] === "X")
          return;
        queue.push([nx, ny]);
        check[nx][ny] = true;
      });
    }
    //검사하다가 거리 2 이내의 P를 만나면 true리턴
    for (let i = 0; i < queue.length; i++) {
      let [qx, qy] = queue[i];
      if (place[qx][qy] === "P") return true;
    }
  }
  return false;
}

function start(arr, place) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      //거리두기 안지켰으면
      if (place[i][j] == "P" && bfs(place, i, j)) {
        arr.push(0);
        return arr;
      }
    }
  }
  arr.push(1);
  return arr;
}
