// 신규 아이디 추천

function solution(new_id) {
  var answer = '';
  //1단계 대문자 -> 소문자
  new_id = new_id.toLowerCase();
  
  //2단계 소문자, 숫자, -, _, . 제외한 문자 제거
  new_id = new_id.replace(/[^a-z0-9-_.]/g,"");
  
  //3단계 . 연속사용된거 .으로 바꿔줌
  new_id = new_id.replace(/\.+/g, ".");
  
  //4단계 처음 끝 . 삭제
  new_id = new_id.replace(/^\.|\.$/g, "");
  
  //5단계
  new_id = new_id.replace(/^$/, "a");
  
  //6단계
  if(new_id.length>=16) {
      new_id = new_id.slice(0,15).replace(/\.$/,"");
  }
  
  //7단계
  while(new_id.length<=2){
      new_id += new_id.charAt(new_id.length-1);
  }
  
  answer = new_id;
  return answer;
}