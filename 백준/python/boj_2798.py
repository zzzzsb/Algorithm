import sys

sys.stdin = open("input.txt", "r")

N, M = map(int, input().split(" "))
card = list(map(int, input().split()))

# 백트래킹 풀이
answer = 0
cardArr = []

def dfs(idx, cnt):
    global answer
    if cnt == 3:
        total = sum(cardArr)
        if total > answer and total <= M:
            answer = total
        return

    for i in range(idx, N):
            cardArr.append(card[i])
            dfs(i+1, cnt+1)
            cardArr.pop()

dfs(0,0)
print(answer)

# 조합 풀이
from itertools import combinations
answer = 0

for cards in combinations(card, 3):
    total = sum(cards)
    if total > answer and total <= M:
        answer = total

print(answer)

