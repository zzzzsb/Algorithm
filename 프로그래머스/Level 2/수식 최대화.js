/*
숫자 
+ - *

연산자의 우선순위 재정의해 가장 큰 숫자 제출하기.

input: (String) expression = "100-2145*458+12"
output: (Int)

+-* 012
+*- 021
-+* 102
-*+ 120
*+- 201
*-+ 210

"50*6-3*2"
1. 연산자기준으로 수식 분리 
[50,6,3,2]
[*,-,*]
2. 사용하는 연산자 추출 [*,-]
3. 연산자 우선순위 배열 만들기 [*,-] / [-,*]
4. 연산자 우선순위별 값 계산, (절대값)최대값 갱신

0. 1 2 3
50 6 3 2

0 1 2
* - *

0번연산자-> 0,1번째숫자 연산
1번연산자-> 1,2번째숫자 연산
2번연산자-> 2,3번째숫자 연산

i번째 연산자 -> num[i](+/-/*)num[i+1] 계산하면됨.

1) - > * 인경우
50 6 3 2
* - *

50 3 2
* *

150 2
*

300


*>+>-
100-200*300-500+20
100-""*""-500+20
60000 

*/
function solution(expression) {
  var answer = 0;
  // 숫자 추출
  let num = expression.split(/[^0-9]/);
  //console.log(num)

  // 연산자 추출
  let operator = [];
  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] === "+" ||
      expression[i] === "-" ||
      expression[i] === "*"
    ) {
      operator.push(expression[i]);
    }
  }
  //console.log(operator)

  // 연산자 우선순위 배열
  let prior = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];

  // 연산자 우선순위별로 계산해보기
  for (let p of prior) {
    let copyNum = [...num];
    let copyOp = [...operator];
    let pIdx = 0;

    while (copyNum.length !== 1) {
      for (let i = 0; i < copyOp.length; i++) {
        if (copyOp[i] === p[pIdx]) {
          copyNum[i] = calculate(copyOp[i], copyNum[i], copyNum[i + 1]);
          copyNum.splice(i + 1, 1);
          copyOp.splice(i, 1);
          i--;
        }
      }
      pIdx++;
    }
    answer = Math.max(answer, Math.abs(copyNum[0]));
  }
  return answer;
}

function calculate(op, n1, n2) {
  n1 = Number(n1);
  n2 = Number(n2);
  if (op === "+") return n1 + n2;
  else if (op === "-") return n1 - n2;
  else if (op === "*") return n1 * n2;
}
