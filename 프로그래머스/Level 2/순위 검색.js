/*
["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]

["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]	

[1,1,1,1,2,4]

{javabackendjuniorpizza: [ 150 ]}
*/
function solution(info, query) {
  var answer = [];
  const infoMap = {};

  function combination(arr, score, start) {
    const key = arr.join("");
    const value = infoMap[key];

    if (value) {
      infoMap[key].push(score);
    } else {
      infoMap[key] = [score];
    }

    for (let i = start; i < arr.length; i++) {
      const temp = [...arr];
      temp[i] = "-";
      combination(temp, score, i + 1);
    }
  }

  for (const i of info) {
    const splited = i.split(" ");
    const score = Number(splited.pop());
    combination(splited, score, 0);
  }

  //이진 탐색을 위한 배열 정렬
  for (const key in infoMap) {
    infoMap[key] = infoMap[key].sort((a, b) => a - b);
  }

  //query 순회하며 이진탐색
  for (const q of query) {
    const splited = q.replace(/ and /g, " ").split(" ");
    const score = Number(splited.pop());
    const key = splited.join("");
    const arr = infoMap[key];

    if (arr) {
      let start = 0;
      let end = arr.length;
      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] >= score) {
          end = mid;
        } else if (arr[mid] < score) {
          start = mid + 1;
        }
      }
      const result = arr.length - start;
      answer.push(result);
    } else {
      answer.push(0);
    }
  }
  console.log(infoMap);
  return answer;
}
