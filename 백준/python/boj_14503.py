import sys

sys.stdin = open("input.txt", "r")

N, M = map(int, input().split())
r, c, d = map(int, input().split())
room = [list(map(int, input().split())) for _ in range(N)]

cnt = 0

# 북 동 남 서
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def isValidRange(x, y):
    if 0 <= x < N and 0 <= y < M:
        return True
    else:
        return False


while True:
    # 현재칸 청소할 수 있으면 청소
    if room[r][c] == 0:
        # 청소
        room[r][c] = '#'
        cnt += 1

    Flag = False
    for i in range(4):
        # 왼쪽 회전
        d = (d + 3) % 4
        nx, ny = r + dx[d], c + dy[d]
        if 0 <= nx < N and 0 <= ny < M and room[nx][ny] == 0:
            r, c = nx, ny
            Flag = True
            break

    # 4칸 중 청소되지 않은 빈칸 없을 때
    if not Flag:
        # 주변 4칸 전부 청소되어있으면 후진
        nx, ny = r - dx[d], c - dy[d]
        # 만약 후진했더니 벽이면 멈춤
        if 0 <= nx < N and 0 <= ny < M:
            if room[nx][ny] == 1:
                break
            else:
                r, c = nx, ny

print(cnt)
