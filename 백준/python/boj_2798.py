import sys

sys.stdin = open("input.txt", "r")

N, M = map(int, input().split(" "))
card = list(map(int, input().split()))

# 백트래킹 풀이
check = [False] * N
answer = 0
cardArr = []

def dfs(depth):
    global answer
    if depth == 3:
        total = sum(cardArr)
        if total > answer and total <= M:
            answer = total
        return

    for i in range(N):
        if not check[i]:
            cardArr.append(card[i])
            check[i] = True
            dfs(depth+1)
            cardArr.pop()
            check[i] = False

dfs(0)
print(answer)

# 조합 풀이
from itertools import combinations
answer = 0

for cards in combinations(card, 3):
    total = sum(cards)
    if total > answer and total <= M:
        answer = total

print(answer)

