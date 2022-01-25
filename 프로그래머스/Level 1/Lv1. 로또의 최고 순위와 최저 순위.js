// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  var answer = [];
  let zeroCnt = 0, sameCnt = 0;
  for(let i=0; i<lottos.length; i++){
      let curNum = lottos[i];
      if(curNum===0){
          zeroCnt++;
          continue;
      }
      for(let j=0; j<win_nums.length; j++){
          if(curNum === win_nums[j]) sameCnt++;
      }
  }
  if(zeroCnt === 0){
      let rank = calRank(sameCnt);
      answer = [rank, rank];
  }
  else {
      let lowRank = calRank(sameCnt);
      let highRank = calRank(sameCnt+zeroCnt);
      answer = [highRank, lowRank];
  }
  return answer;
}

function calRank(sameCnt){
  let rank = 7 - sameCnt;
  return rank < 6 ? rank : 6;
}
