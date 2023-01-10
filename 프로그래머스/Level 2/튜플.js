function solution(s) {
  var tuple = [];
  //s문자열 배열로 변환
  let sArr = [];
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === "{") {
      let str = "";
      let j = i + 1;
      while (s[j] !== "}") {
        str += s[j];
        j++;
      }
      sArr.push(str.split(","));
    }
  }
  // 배열 길이대로 정렬
  sArr.sort((a, b) => a.length - b.length);

  // 튜플 만들기
  for (let i = 0; i < sArr.length; i++) {
    let arr = sArr[i];
    for (let i = 0; i < arr.length; i++) {
      if (!tuple.includes(arr[i])) {
        tuple.push(arr[i]);
      }
    }
  }

  //문자열 숫자로 바꾸기
  for (let i = 0; i < tuple.length; i++) {
    tuple[i] = Number(tuple[i]);
  }

  return tuple;
}
