// 5:27~
/*
Muzi in v
Prodo in
Muzi out v
---> Muzi 다시 들어오는데, Prodo로 이름 바꾸고 다시 들어옴
--->
Prodo in
Prodo in v
Prodo out
Prodo in
----> 두번째 prodo가 현재 채팅방에서 이름 Ryan으로 변경
Prodo in
Ryan in v
Prodo out
Prodo in

3)constraints
- 모든 유저는 [유저아이디] 로 구분
- Enter [유저아이디] [닉네임]
- Leave [유저아이디] [닉네임]
- Change [유저아이디] [닉네임]

["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]

Prodo 들어옴(1234)
Ryan 들어옴(4567)
Prodo 나감(1234)
Prodo 들어옴(1234)

4. edge

*솔루션
1. record[i]를 받아서 공백기준으로 쪼갠 배열 만듬.
curRecord = record[i]; 
[action, user_id, nickname] = curRecord.split(" ");
newRecord = [[Enter, uid1234, Muzi], ...]

2. newRecord의 user_id, nickname 보면서 map 만든다.
uid1234: Muzi
uid4567: Prodo
...

3. 다음 record를 받아서 공백기준으로 쪼갤때는, result에 넣을때 action을 확인하고 넣는다.
if(action === "Enter"){
    //나갔다 들어온 사용자인지 확인한다.
    //나갔다 들어온 사용자면 기존 record의 기록을 바꿔준다.
    if(record[i][1]===user_id) record[i][2]=nickname;
    //새로운 사용자면 그냥 push
}
//Leave일때
그냥 푸시.
//change일때
푸시하지 않고 if(record[i][1]===user_id) record[i][2]=nickname;

result = [["Enter", "uid1234", "Muzi"], [Enter, uid4567, Prodo], [Leave uid1234 prodo]]

*/
function solution(record) {
  var answer = [];
  let newRecord = [];
  
  let action, user_id, nickname;
  
  for(let i=0; i<record.length; i++){
      let recordArr = record[i].split(" ");
      newRecord.push(recordArr);
  }
  // id : nickmane 맵 구성
  const id_map = new Map();
  for(let i=0; i<newRecord.length; i++){
      if(newRecord[i][0]==="Leave") continue;
      user_id = newRecord[i][1];
      nickname = newRecord[i][2];
      
      id_map.set(user_id, nickname);
  }
  
  for(let i=0; i<newRecord.length; i++){
      action = newRecord[i][0];
      user_id = newRecord[i][1];
      if(newRecord[i][2]) nickname = newRecord[i][2];
       
      if(action === "Enter" || action === "Change"){
          newRecord[i][2] = id_map.get(newRecord[i][1]);
      }
      else if(action === "Leave"){
          newRecord[i].push(id_map.get(newRecord[i][1]));
      }
  }

  for(let i=0; i<newRecord.length; i++){
      let action = newRecord[i][0];
      let user_id = newRecord[i][1];
      let nickname = newRecord[i][2];
      
      if(action === "Enter") answer.push(nickname + "님이 들어왔습니다.");
      else if(action === "Leave") answer.push(nickname + "님이 나갔습니다.");
      else if(action === "Change") continue;
  }
  return answer;
}