// https://leetcode.com/problems/find-the-town-judge/
// 997. Find the Town Judge

/* 2:35
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3


Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

Input: n = 3, trust = [[1,2],[2,3],[1,3]]
Output: 3

Input: n = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
output: 3

1)
input: trust 2d array 
output: integer(judge o) / -1(judge x)
constraints:
	- 1=<n<=1000
  - 0<=trust.length<=10^4
  - n-1 == judge를 믿는 사람 수
  - judge는 무조건 1명
  - judge는 아무도 믿으면 안됨!
	
edge case:
input: n = 1 trust = []
return 1

2)
Input: n = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
output: 3

for i 
1->3
trust[i][0] == 믿음을 주는 사람 // cnt[trust[i][1]]++; // cnt[3]=3  cnt[4]=1 
trust[i][1] == 믿음을 받는 사람 // cnt[trust[i][0]]--; // cnt[1]=-2 cnt[2]=-2

for i {
if(cnt[i]==n-1) return i;
}
return -1;
	
3)
N: the n
T: trust.length

time: O(2*N+T)
space: O(N)
*/
var findJudge = function(n, trust) {
  const cnt = new Array(n+1).fill(0); //O(N)
  
  for(let i=0; i<trust.length; i++){ //O(T)
    cnt[trust[i][1]]++;
    cnt[trust[i][0]]--;
  }
  
  for(let i=1; i<=cnt.length; i++){ //O(N)
    if(cnt[i]==n-1) return i;
  }
  return -1;
};
