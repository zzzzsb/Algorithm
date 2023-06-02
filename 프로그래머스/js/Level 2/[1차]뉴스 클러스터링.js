/*
N: str1.length
M: str2.length
time: O(N) + O(M) + O(N*M^3) + O(M)
space: O(N) + O(M) + O(Math.min(N, M)) + O(N+M) 
*/
function solution(str1, str2) {
  var answer = 0;
  let arr1 = convertSet(str1);
  let arr2 = convertSet(str2);

  // 교집합, 합집합 구하기
  let intersect = [];
  let union = [];
  for(let i=0; i<arr1.length; i++){
      //arr1[i]가 arr2에도 있으면
      if(arr2.indexOf(arr1[i]) >= 0){
          //교집합에 추가
          intersect.push(arr1[i]);
          //arr2에서 arr1[i] 삭제해줌.
          arr2.splice(arr2.indexOf(arr1[i]), 1);
      }
      union.push(arr1[i]);
  }
  for(let i=0; i<arr2.length; i++){
      union.push(arr2[i]);
  }

  // edge
  if(union.length === 0){
      answer = Math.floor(1 * 65536);
  } else {
      answer = Math.floor((intersect.length / union.length) * 65536);
  }
  
  return answer;
}

function convertSet(str){
  let multiSet = [];
  let strArr = str.split("");
  const regExp = /^[a-zA-Z]*$/;
  for(let i=0; i<strArr.length-1; i++){
      let curWord = strArr[i]+strArr[i+1];
      if(regExp.test(curWord)) multiSet.push(curWord.toUpperCase()); 
  }
  return multiSet;
}
