//Solution 1
//time: O(N*k)
//space: O(N-k)
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


//Solution 2
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
