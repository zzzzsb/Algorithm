import sys

sys.stdin = open("input.txt", "r")

N = int(input())
arr = list(map(int, input().split()))

# 백트래킹 풀이
check = [False] * N
newArr = []
ans = 0


def cal(array):
    total = 0
    for i in range(N - 1):
        total += abs(array[i] - array[i + 1])
    return total


def dfs(depth):
    global ans
    if depth == N:
        ans = max(ans, cal(newArr))

    for i in range(N):
        if not check[i]:
            check[i] = True
            newArr.append(arr[i])
            dfs(depth + 1)
            check[i] = False
            newArr.pop()


dfs(0)
print(ans)


# 순열 풀이
from itertools import permutations

answer = 0

def cal(array):
    total = 0
    for i in range(N - 1):
        total += abs(array[i] - array[i + 1])
    return total

for list in permutations(arr):
    answer = max(answer, cal(list))

print(answer)