/*
문자열로 만들수 있는 모든 숫자 도출
0,1,1

0, 01, 011
1,10,11,101,110

해당 숫자가 소수인지 판별
소수면 카운팅함
*/
function solution(numbers) {
  var answer = [];
  const numArr = numbers.split("");

  //모든 경우의 수 순열 구하기
  for (let i = 1; i <= numArr.length; i++) {
    let per_res = getPermutation(numArr, i);
    per_res.forEach((el) =>
      isPrime(parseInt(el)) ? answer.push(parseInt(el)) : answer
    );
  }
  answer = [...new Set(answer)];
  //console.log(answer)
  return answer.length;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//순열 구하는 함수
function getPermutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((el) => el);

  arr.forEach((fixed, index, origin) => {
    //fixed숫자 제외한 배열만듬
    const res = [...origin.slice(0, index), ...origin.slice(index + 1)];
    //고정숫자 뺀 배열에서 순열 구함
    const permu = getPermutation(res, selectNum - 1);
    //고정숫자+제외순열 붙여서 문자열 만들어줌
    const attached = permu.map((pArr) => [fixed, ...pArr].join(""));
    result.push(...attached);
  });
  return result;
}
