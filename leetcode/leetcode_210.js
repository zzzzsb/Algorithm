// https://leetcode.com/problems/course-schedule-ii/
// 210. Course Schedule II

/*
0->1
 ->2 ->3
0: {
    incoming: 0,
    dest: [1,2]
}
1: {
    incoming: 1,
    dest: [3]
}
2: {
    incoming: 1,
    dest: [3]
}
3: {
    incoming: 2,
    dest: []
}

0,1,2,3
12개

0,1,2->3
0,1->2
0->1
*/

// Solution #1
// time: O(N^2)
// space: O(N^2)
var findOrder = function(numCourses, prerequisites) {
  //edge case : prerequisites=[]
  if(!prerequisites.length){
      const result = [];
      for(let i=0; i<numCourses; i++) result.push(i);
      return result;
  }
  const map = topologicalSort(prerequisites);
  //console.log(map);
  return BFS(map, numCourses);
};

const topologicalSort = (prerequisites) => {
  const map = new Map(); // space: O(n*n-1)=>O(N^2)
  for(let [to, from] of prerequisites){ // time: O(prerequisites.length)
      //if (to === from) return [];
      if(!map.has(from)){
          map.set(from, { inComing: 0, dest: [to], });
      } else{
          map.get(from).dest.push(to);
      }
      
      if(!map.has(to)){
          map.set(to, {inComing: 1, dest: [],});
      } else{
          map.get(to).inComing++;
      }
  }
  //console.log(map);
  return map;
};

//time: O(N^2)
//space: O
const BFS = (map, numCourses) => {
  let result = [];
  //console.log(findSource(map));
  const queue = findSource(map); //space: O(numCourses)
  //console.log(queue)
  const courses = new Array(numCourses).fill(0); // time: O(numCourses), space: O(numCourse)

  //console.log(queue);
  //queue []
  //result [0]
  while(queue.length){ //time: O(numCourses^2)
      const curKey = queue.shift();
      const { inComing, dest } = map.get(curKey);
      //console.log(curKey)
      if(inComing===0){
          result.push(curKey); //space: O(numCourses)
          courses[curKey]=1;
      }
      
      for(let d=0; d<dest.length; d++){
          const child = map.get(dest[d]);
          if(child.inComing > 0) child.inComing--;
          if(child.inComing ===0) queue.push(dest[d]);
      }
  }
  //console.log(map);
  //edge case: 선수과목이 이상한 경우(?말이 안되는 경우) [] return
  for(let [key, value] of map){
      if(value.inComing!==0) return [];
  }
  
  //edge case: 선수과목 필요없는 과목 있을때 result에 추가
  for(let c=0; c<numCourses; c++){ //time: O(numCourses)
      if(courses[c]===0) result.push(c);
  }
  return result;
}

function findSource(map){ //time: O(numCourses)
  const queue=[];
  for (let [key, value] of map) {
      if(value.inComing === 0) queue.push(key);
  }
  if(!queue.length) return [];
  else return queue;
};



/* ----------------------------------------------------*/

// Solution #2
var findOrder = function(numCourses, pre) {
	if (pre.length === 0){
        const result=[];
        for(let c=0; c<numCourses; c++) result.push(c);
        return result;
    }

	const map = topologicalSort(pre);
	if (map === -1) return [];

	const sources = findSource(map);
	if (sources === -1) return [];

	return bfs(map, sources,numCourses);
    
}

function bfs(map, sources, num) {
	  const queue = [...sources];
    const result=[];
    const courses=new Array(num).fill(0);
	
	while (queue.length > 0) {
		const curKey = queue.shift();
		const { incoming, next } = map.get(curKey);
        
        if(incoming===0) {
            result.push(curKey);
            courses[curKey]=1;
        }

		for (let n of next) {
			if(map.get(n).incoming === 0) return [];
			if (--map.get(n).incoming === 0) queue.push(n);
		}
	}
	
	for (let [key, value] of map) {
		if (value.incoming > 0) return [];
	}
    
    for(let c=0; c<num; c++){
       if(courses[c]===0){
           result.push(c);
       } 
    }
    
	return result;
}

function findSource(map) {
	const sourses = [];

	for (let [key, value] of map) {
		if (value.incoming === 0) {
			sourses.push(key);
		}
	}
	if (sourses.length > 0) return sourses;
	// if no incoming with value 0, false;
	return -1;
}

function topologicalSort(pre) {
	const map = new Map();

	for (let [to, from] of pre) {
		if (to === from) return -1;

		if (!map.has(to)) {
			map.set(to, {
				incoming: 1,
				next: [],
			}); // 3
		} else {
			map.get(to).incoming++;
		}

		if (!map.has(from)) {
			map.set(from, {
				incoming: 0,
				next: [to],
			});
		} else {
            map.get(from).next.push(to);
		}
	}

	return map;
}
