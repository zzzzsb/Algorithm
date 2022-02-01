// 땅따먹기

// Solution #1
// time: O(N)
// space: O(N)
function solution(land) {
  var answer = 0;
  let dp = Array.from({length: land.length}, () => new Array(land[0].length).fill(0));
  
  // base case
  for(let i=0; i<4; i++){
      dp[0][i]=land[0][i];
  }
  
  for(let i=1; i<dp.length; i++){
      for(let j=0; j<4; j++){
          let choiceLand = dp[i-1][j];
          
          for(let k=0; k<4; k++){
            //j가 0이라면 1,2,3만 택하고 싶다.
              if(j===k) continue;
              dp[i][k] = Math.max(dp[i][k], choiceLand+land[i][k]);
          }
      }
  }
  
  for(let i=0; i<4; i++){
      answer = Math.max(answer, dp[dp.length-1][i]);
  }

  return answer;
}

// Solution #2
// time: O(N)
// space: O(1)
function solution(land) {
  var answer = [];
  for(let i=1; i<land.length; i++){
      land[i][0] += Math.max(land[i-1][1], land[i-1][2], land[i-1][3]);
      land[i][1] += Math.max(land[i-1][0], land[i-1][2], land[i-1][3]);
      land[i][2] += Math.max(land[i-1][1], land[i-1][0], land[i-1][3]);
      land[i][3] += Math.max(land[i-1][1], land[i-1][2], land[i-1][0]);
  }
  
  answer = land[land.length-1];

  return Math.max(...answer);
}