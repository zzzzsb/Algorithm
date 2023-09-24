"""
풀이 1
"""
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




"""
2023.09.24~25
풀이 2
"""

"""
N*N 격자
검은색 블록(-1), 무지개 블록(0), 일반 블록(M가지 색상, 색은 M 이하 자연수로 표현)
상하좌우 인접한 칸

*블록 그룹: 연결된 블록의 집합
- 그룹에는 일반 블록 적어도 하나 있어야함, 일반블록의 색은 모두 같음
- 검은색 블록은 포함되면 안됨
- 무지개 블록은 얼마나 들어있든 상관없음
- 그룹에 속한 블록의 개수는 2보다 크거나 같음
- 임의 한 블록에서 그룹에 속한 인접한 칸으로 이동해서, 그룹에 속한 다른 모든 칸으로 이동할 수 있어야함.

*기준 블록
- 무지개블록이 아닌 블록 중 행의 번호가 가장 작은 블록(i) -> 여러개면 열의 번호가 가장 작은 블록(j)

*오토플레이: 블록 그룹이 존재하는 동안 계속해서 반복되어야 함
- 1) 크기가 가장 큰 블록그룹을 찾음. 여러개면 포함된 무지개 블록 수가 가장 많은 블록그룹, 여러개면 기준블록의 행이 가장 큰것, 여러개면 열이 가장 큰것
- 2) 1에서 찾은 블록그룹 블록 모두 제거. B개일때 B^2점 획득
- 3) 격자에 중력 작용 -> 검은색 블록 제외 모든 블록이 행의 번호가 큰 칸으로 이동(다른 블록이나 격자 경계 만나기 전까지 계속)
- 4) 90도 반시계 방향 회전함.
- 4) 다시 격자에 중력 작용
"""

# 입력받기
import sys
sys.stdin = open('input.txt', 'r')

from collections import deque
N, M = map(int, input().split())
board = [list(map(int, input().split())) for _ in range(N)]


dx = [-1,0,1,0]
dy = [0,1,0,-1]

# 1. 가장 큰 블록 그룹 찾기
"""
**최대 블록그룹 찾는 함수
- 입력: i,j 좌표
- 출력: [블록그룹 좌표들]

현재좌표가 i,j
visited 초기화
현재 색 = board[i][j]
큐에 [[i,j]] 넣기 
큐 popleft(), 해당좌표기준으로 상하좌우 탐색 
-> 현재색과 같거나, 0이면(무지개) 큐에 넣기, visited = True

"""
def find_group(i, j):
    normal_blocks = []
    rainbow_blocks = []
    q = deque()
    q.append([i,j])
    visited[i][j] = True
    normal_color = board[i][j]

    while q:
        [cx, cy] = q.popleft()

        if board[cx][cy] == 0:
            rainbow_blocks.append([cx,cy])
        else:
            normal_blocks.append([cx,cy])

        for d in range(4):
            nx, ny = cx+dx[d], cy+dy[d]
            if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny]:
                if board[nx][ny] == normal_color or board[nx][ny] == 0:
                    q.append([nx, ny])
                    visited[nx][ny] = True

        # 무지개 블록 visited 초기화 (다음 그룹 탐색시 포함되어야 하기때문에)
    for [i,j] in rainbow_blocks:
            visited[i][j] = False

    return normal_blocks, rainbow_blocks

def gravity():
    for j in range(0, N):
        for i in range(N-2, -1, -1):
            # 검은색 블록 아니라면
            if board[i][j] >= 0:
                if board[i+1][j] == -2:
                    next_i = i
                    while board[next_i+1][j] == -2:
                        next_i += 1
                        if next_i == N-1:
                            break
                    board[next_i][j] = board[i][j]
                    board[i][j] = -2


"""
00 01 02 03 04
10 11 12 13 14
20 21 22 23 24
30 31 32 33 34
40 41 42 43 44

04 14 24 34 44
03 13 23 33 43
02 12 22 32 42
01 11 21 31 41
00 10 20 30 40

x,y
nx,ny = y, (N-1-x) 
"""
def rotate():
    temp = [[0]*N for _ in range(N)]

    for i in range(N):
        for j in range(N):
            temp[i][j] = board[j][N-1-i]

    return temp


score = 0

while True:
    visited = [[False] * N for _ in range(N)]
    max_group_size = 0
    max_group = []
    for i in range(N):
        for j in range(N):
            if board[i][j] > 0 and not visited[i][j]:
                normal_blocks, rainbow_blocks = find_group(i,j)
                cur_group_size = len(normal_blocks) + len(rainbow_blocks)
                normal_blocks.sort(key=lambda x: (x[0], x[1]))

                #블록그룹 계산
                if cur_group_size >= 2:
                    if cur_group_size > max_group_size:
                        max_group = [[len(rainbow_blocks), normal_blocks, rainbow_blocks]]
                        max_group_size = cur_group_size
                    elif cur_group_size == max_group_size:
                        max_group.append([len(rainbow_blocks), normal_blocks, rainbow_blocks])


    if len(max_group) == 0:
        break

    # 크기 같은 블록 그룹이 여러개라면
    # 무지개 블록 수도 같다면
    if len(max_group) >= 2:
        max_group.sort(key=lambda x: (-x[0], -x[1][0][0], -x[1][0][1]))
    max_group = max_group[0]

    # 2. 블록 모두 제거, B개면 B^2 점수 획득
    for [i,j] in max_group[1]+max_group[2]:
        board[i][j] = -2
    score += pow(max_group_size, 2)

    # 3. 격자에 중력 작용
    gravity()
    # 4. 격자가 90도 반시계 방향으로 회전
    board = rotate()
    # 5. 격자에 다시 중력 작용
    gravity()

print(score)