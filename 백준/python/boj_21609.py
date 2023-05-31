import sys

sys.stdin = open("input.txt", "r")

from collections import deque

N, M = map(int, input().split())
map = [list(map(int, input().split())) for _ in range(N)]

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
score = 0


def find_group(i, j):
    color = map[i][j]
    blocks = [[i, j]]
    rainbow_blocks = []

    q = deque()
    q.append([i, j])
    visited[i][j] = True

    while q:
        [x, y] = q.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny]:
                if map[nx][ny] == color:
                    visited[nx][ny] = True
                    blocks.append([nx, ny])
                    q.append([nx, ny])
                elif map[nx][ny] == 0:
                    visited[nx][ny] = True
                    rainbow_blocks.append([nx, ny])
                    q.append([nx, ny])

    # 무지개 블록 방문 해제
    for idx in range(len(rainbow_blocks)):
        rainbow_block = rainbow_blocks[idx]
        i, j = rainbow_block[0], rainbow_block[1]
        visited[i][j] = False

    return blocks, rainbow_blocks


def gravity():
    # 다른 블록이나 격자 경계 만나기 전까지
    # 중력: 검정 블록 제외 행 번호 큰칸으로
    for i in range(N - 2, -1, -1):
        for j in range(N):
            if map[i][j] >= 0:
                idx = i
                while True:
                    if 0 <= idx + 1 < N and map[idx + 1][j] == -2:
                        map[idx + 1][j] = map[idx][j]
                        map[idx][j] = -2
                        idx += 1
                    else:
                        break


def rotate():
    global map
    new_map = [[0] * N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            new_map[i][j] = map[j][N - 1 - i]
    map = new_map


# 게임 실행
while True:
    visited = [[False] * N for _ in range(N)]
    max_group = []
    max_size = 0
    rainbow_cnt = 0
    for i in range(N):
        for j in range(N):
            # 블록그룹 기준 블록 찾기
            if map[i][j] > 0 and not visited[i][j]:
                blocks, rainbow_blocks = find_group(i, j)
                rainbow_cnt = len(rainbow_blocks)
                group = blocks + rainbow_blocks
                if len(group) >= 2:
                    if max_size < len(group):
                        max_group = [[rainbow_cnt, group]]
                        max_size = len(group)
                    elif max_size == len(group):
                        max_group.append([rainbow_cnt, group])

    # 블록 그룹 없으면 종료
    if len(max_group) == 0:
        break

    # 최대 블록 그룹 여러개라면
    if len(max_group) >= 1:
        max_group.sort(key=lambda x: (-x[0], -x[1][0][0],-x[1][0][1]))

    max_group = max_group[0][1]

    # 블록그룹 제거
    for i in range(max_size):
        [x, y] = max_group[i]
        map[x][y] = -2

    score += pow(max_size, 2)

    gravity()
    rotate()
    gravity()


print(score)