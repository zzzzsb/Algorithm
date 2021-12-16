//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
//121. Best Time to Buy and Sell Stock

/*

     7 1 5 3 6 4

min  7 7 1 1 1 1
max  0 0 4 4 5 5

내 전 값이랑 min값 비교해서 작은걸 min으로.
max랑 내 현재가격-min 한거 비교해서 max로.

     7 6 4 3 1
min  7 7 6 4 3
max  0 0 0 0 0
*/
// Solution 1
// N: prices.length
// time: O(N)
// space: O(1)
var maxProfit = function(prices) {
  let max = 0;
  let min = prices[0];
  
  for(let i=1; i<prices.length;i++){
      min = Math.min(min, prices[i-1]);
      max = Math.max(max, prices[i]-min);
  }
  return max;
};

// Solution 2
// Algorithm : two pointer
// N: prices.length
// time: O(N)
// space: O(1)
var maxProfit = function(prices) {
  // edge case
  if(prices.length===1) return 0;
  let max = 0;
  let profit = 0;
  let buyIdx = 0;
  let sellIdx = 1;
  
  while(buyIdx < prices.length){
      if(sellIdx === prices.length){
          buyIdx++;
          sellIdx=buyIdx+1;
      }
      
      if(prices[buyIdx]<prices[sellIdx]){
          profit = prices[sellIdx]-prices[buyIdx];
          max = Math.max(max, profit);
          sellIdx++;
      }
      else{
          buyIdx=sellIdx;
          sellIdx=buyIdx+1;
      }
      
  }
  return max;
};
