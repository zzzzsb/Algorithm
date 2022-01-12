// https://leetcode.com/problems/merge-intervals/
// 56. Merge Intervals

// Solution #2
// N : intervals.length
// M : res.length
// time O(NLogN + NM)
// space O(M)
function mergeOverlappingIntervals(intervals){
  // edge case
  if(intervals.length <= 1) return intervals;

  intervals.sort((a,b) => a[0] - b[0]);
  const res = [intervals[0]];

  for(let interval of intervals){
    let curInterval = res[res.length-1];
    if(curInterval[1] >= interval[0]){
      curInterval[1] = Math.max(curInterval[1], interval[1]);
    } else {
      res.push(interval);
    }
  }
  return res;
}

// Solution #1
function mergeOverlappingIntervals(intervals){
  // edge case
  if(intervals.length <= 1) return intervals;
  let max = 0;
  for(let i=0; i<intervals.length; i++){
    max = Math.max(max, intervals[i][0]);
    max = Math.max(max, intervals[i][1]);
  }

  const intervalArr = new Array(max).fill(null);
  for(let i=0; i<intervals.length; i++){
    let start = intervals[i][0];
    let end = intervals[i][1];
    while(start !== end){
      intervalArr[start]="start";
      start++;
    }
    if(!intervalArr[end]) intervalArr[end]="end";
  }
  console.log(intervalArr);

  let res=[];
  let newStart = 0, newEnd = 0, i = 0, j = 0;
  
  while(i<intervalArr.length){
    if(intervalArr[i] === "start"){
      newStart = i;
      j=i+1;
      while(intervalArr[j]=== "start"){
        j++;
      }
      newEnd = j;
      res.push([newStart, newEnd]);
      i=j;
    }
    else if(intervalArr[i]==="end") res.push([i,i]);
    i++;
  }
  return res;
}
