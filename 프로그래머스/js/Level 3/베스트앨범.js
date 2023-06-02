/*
가장 많이 재생된 장르 먼저 수록
장르 내 가장 많이 재생된 노래 먼저 수록
    - 재생횟수 같으면 고유번호 낮은 노래 먼저 수록

1) input:
- genres배열, plays배열
2) output:
- 장르별로 노래 두개씩 뽑아 index 넣은 int 배열
3) 제한사항
input배열 크기는 1~10000
4) edge case
- 

["classic", "pop", "classic", "classic", "pop"]
[500, 600, 150, 800, 2500]

1. 맵 구성(2개)
1) 첫번째 맵: (장르, 재생횟수)
classic: 1450
pop : 3100
-> value기준으로 내림차순 sort

2) 2번째 맵
- key: 장르
- value: [index, plays[i]] // [인덱스, 재생횟수] 

classic: [0,500], [2,150], [3,800]
pop: [1,600], [4,2500]

3. 맵의 value에서 재생횟수 기준으로 내림차순 sort

4. 첫번째 맵의 key를 기준으로 2번째 맵의 키를 찾고, 요소에서 2개씩 뽑는다.
이때 answer배열에 요소의 첫번째 index값 push해줌.



*/
function solution(genres, plays) {
  var answer = [];
  // 1) 첫번째 맵: (장르, 재생횟수)
  let map = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (!map.has(genres[i])) {
      map.set(genres[i], plays[i]);
    } else {
      let count = map.get(genres[i]);
      count += plays[i];
      map.set(genres[i], count);
    }
  }
  // value기준으로 내림차순 sort
  map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  //console.log(map)

  // 2) 2번째 맵
  let map2 = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (!map2.has(genres[i])) {
      map2.set(genres[i], [[i, plays[i]]]);
    } else {
      let value = map2.get(genres[i]);
      value.push([i, plays[i]]);
      map2.set(genres[i], value);
    }
  }

  // 맵의 value에서 재생횟수 기준으로 내림차순 sort
  for (let [key, value] of map2) {
    let newValue = value.sort((a, b) => a[0] - b[0]);
    newValue = value.sort((a, b) => b[1] - a[1]);
    map.set(key, newValue);
  }
  //console.log(map2)

  // 첫번째 맵의 key를 기준으로 2번째 맵의 키를 찾고, 요소에서 2개씩 뽑는다.
  // 이때 answer배열에 요소의 첫번째 index값 push해줌.
  for (let key of map.keys()) {
    for (let [genres, arr] of map2) {
      if (key === genres) {
        //장르에 속한곡 하나일때 예외처리
        if (arr.length >= 2) {
          answer.push(arr[0][0]);
          answer.push(arr[1][0]);
        } else {
          answer.push(arr[0][0]);
        }
      }
    }
  }
  return answer;
}
