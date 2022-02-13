// https://leetcode.com/problems/number-of-provinces/
// 547. Number of Provinces

/*
input: 2d array
output: integer(province의 수)
constraints:
    - 1<=n<=20
    
edge case:
    
[1,1,0],
[1,1,0],
[0,0,1]

0-0 1
0-1 0
1-0 0
1-1 0
2-2 1

i==j이고 i값이 키나 밸류에 없으면 면 맵의 키에 넣기 / 키나 밸류에 있으면 return
i!=j 이고 isConnected가 1일때, 
    i값을 키나 밸류에서 찾음, 키에 있으면 j값을 밸류로 넣음, 
                        밸류에 있으면 j값이 키인지 확인, 키라면 패스, 키가 아니라면 j값을 밸류로 넣음
i!=j 이고 isConnected가 0이면 그냥 return;

맵의 키의 개수 리턴
0 : {
  1, 
}
2: {

}


[1,0,1,0],
[0,1,0,0],
[1,0,1,0].
[0,0,0,1]
0 :{
 2,
}
1: {

}
  
[1,1,0],
[1,1,0],
[0,0,1]

[1,0,0,1],
[0,1,1,0],
[0,1,1,1],
[1,0,1,1]

[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
[0,0,0,0]

*/
/*
0,0이 1임 ans++해주고 0,0을 0으로 바꿈, 0,0 0,1 0,2 0,3 중에 1인애를 찾음 
=> 0,3이 1이니까 0,3/ 3,0, 3,3을 0으로 바꿈, 3,0 3,1 3,2 3,3 중에 1인애를 찾음 
=> 3,2가 1이니까 3,2 2,3 2,2을 0으로 바꿈, 2,0 2,1 2,2 2,3 중에 1인애를 찾음
=> 2,1이 1이니까 2,1 1,2 1,1를 0으로 바꿈, 1,0 1,1 1,2 1,3 중에 1인애를 찾음

[1,1,0],
[1,1,0],
[0,0,1]

[0,0,0],
[0,0,0],
[0,0,0]

[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
[0,0,0,0]


[1,1,0],
[1,1,0],
[0,0,1]

[0,0,0],
[0,1,0],
[0,0,1]
*/
var findCircleNum = function(isConnected) {
  let province = 0;
  for(let i=0; i<isConnected.length; i++){
      if(isConnected[i][i]==1){
          province++; // 1
          dfs(isConnected, i); //dfs(is, 0)
      }
  }
  return province;
};

function dfs(isConnected, i){
  isConnected[i][i]=0;
  for(let j=0; j<isConnected.length; j++){
      if(isConnected[i][j]==1){
          isConnected[i][j]=0;
          isConnected[j][i]=0; 
          dfs(isConnected, j); //dfs(is,1)
      }
  }
}