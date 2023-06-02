/*
[2,2,5,4], 2행 2열~5행 4열
[3,3,6,6],
[5,1,6,3]

1 2 3
4 5 6
7 8 9

[[1,1,2,2], 1행 1열부터 2행 2열까지 회전
[1,2,2,3],
[2,1,3,2],
[2,2,3,3]]
*/
function solution(rows, columns, queries) {
  var answer = [];
  // base case
  const matrix = Array.from(Array(rows), () => new Array(columns));
  let num = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = num;
      num++;
    }
  }
  // rotate
  for (let rotP of queries) {
    let startX = rotP[0] - 1;
    let startY = rotP[1] - 1;
    let endX = rotP[2] - 1;
    let endY = rotP[3] - 1;

    let rotate_elem_list = [];
    let min = Number.MAX_VALUE;
    //오른쪽 (startX,startY)~(startX,endY) (1,1)~(1,3)
    for (let i = startY; i < endY; i++) {
      rotate_elem_list.push(matrix[startX][i]);
      min = Math.min(min, matrix[startX][i]);
    }
    //아래 (startX,endY)~(endX,endY) (1,3)~(4,3)
    for (let i = startX; i < endX; i++) {
      rotate_elem_list.push(matrix[i][endY]);
      min = Math.min(min, matrix[i][endY]);
    }
    //왼쪽 (endX,endY)~(endX,startY) (4,3)~(4,1)
    for (let i = endY; i > startY; i--) {
      rotate_elem_list.push(matrix[endX][i]);
      min = Math.min(min, matrix[endX][i]);
    }
    //위 (endX~startY)~(startX,startY) (4,1)~(1,1)
    for (let i = endX; i > startX; i--) {
      rotate_elem_list.push(matrix[i][startY]);
      min = Math.min(min, matrix[i][startY]);
    }
    //console.log(rotate_elem_list)
    answer.push(min);

    //반대로 pop하며 넣기
    //아래 (startX+1~startY)~(endX~startY) (1,1)~(4,1)
    for (let i = startX; i < endX; i++) {
      matrix[i][startY] = rotate_elem_list.pop();
    }
    //오른쪽 (endX~startY)~(endX,endY) (4,1)~(4,3)
    for (let i = startY; i < endY; i++) {
      matrix[endX][i] = rotate_elem_list.pop();
    }
    //위 (endX,endY)~(startX,endY) (4,3)~(1,3)
    for (let i = endX; i > startX; i--) {
      matrix[i][endY] = rotate_elem_list.pop();
    }
    //왼쪽 (startX,endY)~(startX,startY) (1,3)~(1,1)
    for (let i = endY; i > startY; i--) {
      matrix[startX][i] = rotate_elem_list.pop();
    }

    //console.log(rotate_elem_list)
  }

  return answer;
}
