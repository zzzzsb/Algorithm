/*
A B C D E F G H I J K L  M  N  O P Q R S T U V W X Y Z
65                       77 78                       90  
N기준으로 작으면 오른쪽이동, 크면 왼쪽이동.
상하 이동 -> or <-

좌우이동.

*/
function solution(name) {
  var answer = 0;
  let len = name.length;
  let idx = 0;

  //좌우 움직임 수 체크
  let move = len - 1;

  for (let i = 0; i < len; i++) {
    let a = "A".charCodeAt(0);
    let z = "Z".charCodeAt(0);
    let curChar = name.charCodeAt(i);
    //"JEROEN"
    //9+4+9+10+4+13
    //1+1
    //현재 문자가 A,Z중 어디에 가까운지를 기준으로 상하이동
    answer += Math.min(curChar - a, z - curChar + 1);

    //연속된 A확인
    //"ABAAAAAAAAABB"
    idx = i + 1;
    while (idx < len && name.charAt(idx) === "A") {
      idx++;
    }
    //console.log(idx)
    //console.log(answer)
    //커서 이동 수 계산

    //"ABAAAAAAAAABB" (move:4)
    //오른쪽으로 가다가 왼쪽으로 이동해 시작점 도달
    //시작점에서 왼쪽으로 이동해 끝점 도달하고 ,연속된 A끝점 오는 경우.
    move = Math.min(move, i * 2 + len - idx);

    //"BBBBAAAAAB" (move:5)
    //처음부터 뒷부분 먼저 입력하는것이 더 빠른경우
    //처음부터 왼쪽으로 이동해 역순으로 가다가(맨끝 도달)
    //다시 오른쪽으로 이동해 시작점 도달하고, 연속된 A시작점 오는 경우.
    move = Math.min(move, (len - idx) * 2 + i);
    //console.log(move)
  }
  console.log(answer);
  console.log(move);
  return answer + move;
}
