import sys
from collections import deque

sys.stdin = open("input.txt", "r")

N = int(input())
graph = [list(map(int, input())) for _ in range(N)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
visited = [[False] * N for _ in range(N)]
answer = []


def bfs(x, y):
    q = deque()
    q.append([x, y])
    cnt = 0
    while q:
        cx, cy = q.popleft()
        visited[cx][cy] = True
        cnt += 1
        for i in range(4):
            nx = cx + dx[i]
            ny = cy + dy[i]
            if 0 <= nx < N and 0 <= ny < N:
                if graph[nx][ny] == 1 and visited[nx][ny] == False:
                    visited[nx][ny] = True
                    q.append([nx, ny])
    return cnt


for i in range(N):
    for j in range(N):
        if graph[i][j] == 1 and visited[i][j] == False:
            answer.append(bfs(i, j))

answer.sort()
print(len(answer))
for i in range(len(answer)):
    print(answer[i])
