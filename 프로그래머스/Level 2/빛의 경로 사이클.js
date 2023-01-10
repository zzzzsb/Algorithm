/*
S: 직진
L: 왼쪽
R: 오른쪽

각 정점에서 상하좌우로 다 돌려봄.
나 자신으로 돌아오면 사이클이니까 answer에 푸시해줌.
*/
function solution(grid) {
  const answer = [];

  const X = grid.length;
  const Y = grid[0].length;

  const directions = [
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 0],
  ];
  const visited = grid.map((s) => Array.from(s).map(() => Array(4).fill(0)));

  for (let i = 0; i < X; i++) {
    for (let j = 0; j < Y; j++) {
      for (let k = 0; k < 4; k++) {
        if (visited[i][j][k]) continue;

        let cycle = 1;

        const queue = [[i, j, k, 1]];
        visited[i][j][k] = 1;

        while (queue.length) {
          let [x, y, d, c] = queue.shift();

          cycle = Math.max(cycle, c);

          if (grid[x][y] === "L") d = (d + 1) % 4;
          else if (grid[x][y] === "R") d = (d + 3) % 4;

          x += directions[d][0];
          y += directions[d][1];

          if (x < 0) x = X - 1;
          else if (x >= X) x = 0;

          if (y < 0) y = Y - 1;
          else if (y >= Y) y = 0;

          if (!visited[x][y][d]) {
            visited[x][y][d] = 1;
            queue.push([x, y, d, c + 1]);
          }
        }

        answer.push(cycle);
      }
    }
  }

  answer.sort((a, b) => a - b);

  return answer;
}
