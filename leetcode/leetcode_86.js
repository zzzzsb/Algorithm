// 86. Partition List
// https://leetcode.com/problems/partition-list/

// Solution #1
var partition = function(head, x) {
  let dummy = new ListNode(0);
  let res = dummy;
  let min=[], max=[];
  
  while(head){
      if(head.val < x){
          min.push(head.val);
      } else {
          max.push(head.val);
      }
      head = head.next;
  }
  
  let resArr = [...min, ...max];
  console.log(resArr)
  
  for(let i=0; i<resArr.length; i++){
      let curNode = new ListNode(resArr[i]);
      res.next = curNode;
      res = res.next;
  }
  
  return dummy.next;
};

// Solution #2
var partition = function(head, x) {
  let fdum = new ListNode(0),
      bdum = new ListNode(0),
      front = fdum,
      back = bdum;
  
  while(head) {
      if(head.val < x) {
          front.next = head;
          front = head;
      } else {
          back.next = head;
          back = head;
      }
      head = head.next;
  }
  front.next = bdum.next;
  back.next = null;
  
  return fdum.next;
};