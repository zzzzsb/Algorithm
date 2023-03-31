import sys

sys.stdin = open("input.txt", "r")

N = int(input())
board = [list(map(int, input().split(" "))) for _ in range(N)]

check = [False] * N
answer = 1e9
def dfs(idx, cnt):
    global  answer
    if cnt == N/2:
        start = 0
        link = 0
        for i in range(N):
            for j in range(N):
                if not check[i] and not check[j]:
                    start += board[i][j]
                if check[i] and check[j]:
                    link += board[i][j]
        answer = min(answer, abs(start-link))
        return
    for i in range(idx, N):
        if not check[i]:
            check[i] = True
            dfs(i+1, cnt+1)
            check[i] = False

dfs(0,0)
print(answer)
