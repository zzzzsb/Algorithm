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





"""
*********************************************
풀이 2
*********************************************
"""
import sys

# 읽기 전용 입력받기
sys.stdin = open('input.txt', 'r')

# 예제 입력 받기

# 방의 크기 N*M
N, M = map(int, input().split())

# 로봇 청소기 좌표 (r,c) / 바라보는 방향 d(0:북, 1:동, 2:남, 3:서)
r, c, d = map(int, input().split())

# N*M 칸 청소여부 2차원 배열 room[i][j] = 0 이면, 청소되지 않은 빈칸 / 1이면 벽
# 가장 북,남,서,동쪽 줄 중 하나 이상에는 모두 벽임.
room = [list(map(int, input().split())) for _ in range(N)]

"""
로봇 청소기 동작
1. room[i][j] = 0 (빈칸) 이면, 현재칸 청소한다.
2. 현재칸 주변 4칸 중 빈칸 없는 경우(1), 
    -> 바라보는 방향 유지한채 한칸 후진 가능하면 후진, 1번으로 돌아가서 다시 진행
    -> 뒤가 벽이라 후진할 수 없다면 멈추기
3. 현재칸 주변 4칸 중 빈칸 있는 경우,
    -> 반시계 방향으로 90도 회전
    -> 바라보는 방향 기준 앞칸 빈칸이면, 한칸 전진
    -> 1번으로 돌아가서 다시 진행
"""

"""
1. (r,c) = 0인지 확인. 
- 0이면 청소하고, (-1로 표시) 정답에 +1
- (r,c)의 주변 4칸 탐색
     -> 0이 하나도 없으면(빈칸 하나도 없으면),
       -> 바라보는 방향 반대 뒤칸 탐색
       -> 비어있으면 방향 유지한채 후진, 다시 1번(bfs)
       -> 벽이면 멈춘다.
    -> 0이 하나라도 있으면
       -> 반시계방향 90도 회전
       -> 바라보는 방항 앞칸 탐색
       -> 비어있으면 한칸 전진, 다시 1번(bfs)

1. 현재 위치 청소안되어있으면(0) 청소
2. 현재 위치에서 d 기준으로 왼쪽 방향부터 탐색
    - 청소안된 칸 있으면, 그 방향으로 회전하고 전진, 청소하고 탐색(1번 재진행)
    - 청소안된 칸 없으면, 기존방향으로 후진, 청소하고 탐색(1번 재진행) /
             - 후진불가능(벽일때)하면 종료.
"""

cnt = 0
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def clean(x, y, d):
    global cnt
    # 현재 칸 청소 안되어있으면
    if room[x][y] == 0:
        # 청소한다
        room[x][y] = -1
        # 청소횟수 +1
        cnt += 1

    is_empty = False
    # 주변 4칸 탐색
    for _ in range(4):
        # 현재 방향의 왼쪽방향
        left_d = (d + 3) % 4
        nx, ny = x + dx[left_d], y + dy[left_d]
        # 왼쪽 회전했을때 청소안된 빈칸인경우
        if room[nx][ny] == 0:
            is_empty = True
            clean(nx, ny, left_d)
            break
        d = left_d

    # 4칸중 비어있는 칸 없다면
    if not is_empty:
        back_d = (d + 2) % 4
        nx, ny = x + dx[back_d], y + dy[back_d]
        if room[nx][ny] == 1:
            return
        clean(nx, ny, d)


clean(r, c, d)
print(cnt)
