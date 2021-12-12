// https://leetcode.com/problems/generate-parentheses/
// 22. Generate Parentheses
// Backtracking

/*
res = [];
combination

3
((( )))
(() ())
(()) ()

( 여는 괄호가 n보다 작으면 ( 추가한다.
) 가  ( 보다 작으면 ) 추가한다.
string 길이가 n*2가 되면 string을 res에 push 


(-> (( -> ((( -> ((())) 
       -> (() -> (()( -> (()() -> (()())
              -> (()) -> (())( -> (())()
       
 -> () -> ()( -> ()(( -> ()(() -> ()(())
              -> ()() -> ()()( -> ()()()
       

*/
var generateParenthesis = function(n) {
  const res = [];
  backtrack(res, "", 0, 0, n);
  return res;
  
};

function backtrack(res, curS, open, close, n){
  if(curS.length === n*2) res.push(curS);
  if(open<n) backtrack(res, curS+"(", open+1, close, n);
  if(close<open) backtrack(res, curS+")", open, close+1, n);
}