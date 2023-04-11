import sys
sys.stdin = open("input.txt", "r")

"""
x % 3 == 0 -> x /= 3
x % 2 == 0 -> x /= 2
x -= 1  
   
   n이 1이 되기위한 최소 연산의 수 
   0 1 2 3 4 5 6 7 8 9 10
   0 0 1 1 2 0 0 0 0 0  0
"""

n = int(input())

dp = [0] * (n + 1)

for i in range(2, n+1):
    dp[i] = dp[i-1] + 1
    if i % 3 == 0:
        dp[i] = min(dp[i], dp[i // 3] + 1)
    if i % 2 == 0:
        dp[i] = min(dp[i], dp[i // 2] + 1)

print(dp[n])
