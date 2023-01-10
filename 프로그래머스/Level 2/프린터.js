function solution(priorities, location) {
  let queue = [];
  let printList = [];
  for (let i = 0; i < priorities.length; i++) {
    queue.push([priorities[i], i]);
  }
  while (queue.length) {
    let curDocs = queue.shift();
    for (let i = 0; i < queue.length; i++) {
      if (curDocs[0] < queue[i][0]) {
        queue.push(curDocs);
        break;
      }
      if (i === queue.length - 1) {
        printList.push(curDocs);
      }
    }
  }
  //console.log(printList)
  let answer = 1;
  for (let docs of printList) {
    if (docs[1] === location) return answer;
    else answer++;
  }
  return answer;
}
