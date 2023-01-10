/*
w * h = brown + yellow = 전체 넓이
(w - 2) * (h - 2) = yellow

2w + 2h - 4 = brown
2w + 2h = brown + 4
2w = brown + 2

*/
function solution(brown, yellow) {
  let [w, h] = [0, 0];
  const carpet = brown + yellow;
  while(w<=(brown+2)/2){
      w++;
      h = carpet / w;
      if(carpet%w !== 0) continue;
      //console.log(w,h)
      if(w*h === carpet && (w-2)*(h-2)===yellow){
          return [h, w];
      }
  }
}