import sys
sys.stdin = open('input.txt', 'r')

"""
   0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
1  0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
5  0 1 2 3 4 1 2 3 4 5 2  3  4  5  6   3
12 0                         1  2  3  4

개수

min(dp[i], dp[i-coin[j]] + 1)


  1 -> 1개
  2 -> 2개
  3 -> 3개
  

"""
n, k = map(int, input().split())
coin = [int(input()) for _ in range(n)]
dp = [10001] * (k+1)
dp[0] = 0

for i in range(n):
    for j in range(coin[i], k+1):
        dp[j] = min(dp[j], dp[j-coin[i]]+1)

if dp[k] == 10001:
    print(-1)
else:
    print(dp[k])
