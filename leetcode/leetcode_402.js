// https://leetcode.com/problems/remove-k-digits/ 
// 402. Remove K Digits

/*
스택 만들어서 push한다. 이때 제일 끝값이 현재 들어올값보다 크면 pop해준다.
pop해줄때 k-- 해주면서. 
cnt == k 되면 푸쉬하지 않은 나머지값을 마저 넣어준다.
*/

// Solution #1
// time: O(N*k)
// space: O(N-k)
var removeKdigits = function(num, k) {
  //edge case
  if(num.length === k) return "0";
  
  const stack = [];
  for(let i=0; i<num.length; i++){
      while(k>0 && stack[stack.length-1] > num[i]){
          stack.pop();
          k--;
      }
      stack.push(num[i]);
  }
  
  // ex. num = "112" k=1
  while(k>0){
      stack.pop();
      k--;
  }
  
  while(stack.length && stack[0]==="0"){
      stack.shift();
  }
      
  return stack.length ? stack.join("") : "0";
};


/*
Input: num = "1432219", k = 3
Output: "1219"

  0 1 2 3 4 5 6
  i,4,3,i,2,i,9
i         ^
j ^

min = [1,5]
result=[1,2,1,9]
*/
//Solution #2
var removeKdigits = function(num, k) {
  //edge case
  if(num.length === k) return "0";
  
  let res = [];
  let numArr = num.split('');
  for(let i=k; i<numArr.length; i++){
      let min = [numArr[i], i];
      for(let j=i; j>=0; j--){
          if(numArr[j]===Infinity) break;
          if(min[0] >= numArr[j]) {
              min[0] = numArr[j];
              min[1] = j;
          }
      }
      res.push(min[0]);
      numArr[min[1]]=Infinity;
  }
  
  while(res && res[0]==="0"){
      res.shift();
  }
  
  return res.length ? res.join('') : "0";
};
