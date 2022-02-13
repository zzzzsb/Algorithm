// https://leetcode.com/problems/keys-and-rooms/
// 841. Keys and Rooms

/*
0~n-1로 라벨링된 n개의 방이 있음.
0번방 빼고 다 잠겨있음.
우리의 목표는 모든 방에 다 방문하는것.
대신 잠긴방에 방문하려면 key가 있어야함.
방에 방문하면, key set이 있음. 

I: roons 2d array
O: boolean
C:
- n == rooms.length
- 2 <= n <= 1000
- 0 <= rooms[i].length <= 1000
- 1 <= sum(rooms[i].length) <= 3000
- 0 <= rooms[i][j] < n
- All the values of rooms[i] are unique.
E:

rooms = [[1],[2],[3],[]]
0->1->2->3 true

rooms = [[1,3],[3,0,1],[2],[0]]
0->1->3 
2를 못감. false
0 [1,3]
1 [3,0,1]
2 [2]
3 [0]

// [3,0,1,0]
0 1 2 3
t     t
const visited = new Array(rooms.length).fill(false); 
visited[0]=true;
const queue = [...rooms[0]];

while(queue.length){
  for(let key of queue){
    key = queue.shift();
    visited[key]=true;
    queue.push(...rooms[key]);
  }
}
for(let i=0; i<rooms.length; i++){
  for(let j=0; j<rooms[i].length; j++){
    
  }
}

*/
/*
N: rooms.length <=1000
M: rooms[i].length <=1000
time: O(N*M)
space: O(N)
*/
var canVisitAllRooms = function(rooms) {
  const visited = new Array(rooms.length).fill(false);
  visited[0]=true;
  const queue = [...rooms[0]];

  while(queue.length){
    let key = queue.shift(); 
    visited[key] = true;

      for(let i=0; i<rooms[key].length;i++){
          if(visited[rooms[key][i]]=== false) queue.push(rooms[key][i]);
      }
  }
  for(let i=0; i<visited.length; i++){
      if(visited[i]==false) return false;
  }
  return true;
};

