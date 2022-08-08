function solution(citations) {
  let h_index = 0;
  citations.sort((a,b) => b-a);
  while(h_index+1 <= citations[h_index]){
      h_index++;
  }

  return h_index;
}