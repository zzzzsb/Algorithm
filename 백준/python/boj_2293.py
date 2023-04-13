import sys
sys.stdin = open('input.txt', 'r')

"""
n가지 종류, k원

1원 2원 5원, 10원 만들기
        0 1 2 3 4 5 6 7 8 9 10
1       0 1 1 1 1 1 1 1 1 1  1 
1,2     0 1 2 2 3 3 4 4 4 5  6
1,2,5   0 1 2 2 3 4 5 6 6 8  10

dp[i] = dp[i] + dp[i-2]

0번 ~ i번째 동전 사용할 때 i번째는 적어도 하나 이상 사용 
1원 - dp[i][j] = dp[i][j-1]
dp[1][2] = 

"""

n, k = map(int, input().split())
coin = [int(input()) for _ in range(n)]
dp = [0] * (k+1)
dp[0] = 1

for i in range(n):
    for j in range(coin[i], k+1):
        dp[j] = dp[j] + dp[j-coin[i]]


print(dp[k])