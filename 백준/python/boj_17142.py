import sys
sys.stdin = open('input.txt', 'r')

"""
바이러스 - 처음에는 모두 비활성, 활성상태 바이러스는 상하좌우 모두 복제 1초
M개를 활성상태로 변경할수 있음.

0: 빈칸
1: 벽
2: 바이러스

벽 - / 비활성 * / 활성 0 / 빈칸은 퍼지는 시간

모든 빈칸에 바이러스가 있게되는 최소시간 출력
어떻게 해도 안되면 -1 출력
"""
from collections import deque

N, M = map(int, input().split())
room = [list(map(int, input().split())) for _ in range(N)]

dx = [-1,0,1,0]
dy = [0,1,0,-1]
min_time = 1e9

def solve():
    # 바이러스 좌표 저장
    virus = []
    vacant_num = 0
    for i in range(N):
        for j in range(N):
            # 빈칸 개수 세줌
            if room[i][j] == 0:
                vacant_num += 1
            # 바이러스
            if room[i][j] == 2:
                virus.append([i, j])

    virus_visited = [False] * len(virus)
    # 바이러스 위치 배열에서 활성화 바이러스 개수 택하기
    def active_virus(idx, active_virus_arr):
        global min_time
        if len(active_virus_arr) == M:
            #print(active_virus_arr)
            # 활성화 해보기
            cur_time = duplicate_virus(active_virus_arr)
            if cur_time != -1:
                min_time = min(min_time, duplicate_virus(active_virus_arr))
            return
        for i in range(idx, len(virus)):
            if not virus_visited[i]:
                active_virus_arr.append(virus[i])
                virus_visited[i] = True
                active_virus(i+1, active_virus_arr)
                active_virus_arr.pop()
                virus_visited[i] = False

    def duplicate_virus(active_virus_arr):
        time = 0
        new_virus_num = 0
        visited = [[False] * N for _ in range(N)]
        q = deque()
        for [x, y] in active_virus_arr:
            q.append([x, y, time])
            visited[x][y] = True

        while q:
            [cx, cy, cur_time] = q.popleft()
            for d in range(4):
                nx, ny = cx+dx[d], cy+dy[d]
                if 0 <= nx < N and 0 <= ny < N and not visited[nx][ny]:
                    if room[nx][ny] == 1:
                        continue
                    else:
                        q.append([nx, ny, cur_time + 1])
                        visited[nx][ny] = True
                        if room[nx][ny] == 0:
                            new_virus_num += 1
                            time = max(time, cur_time+1)
        # 빈칸 개수와 새로 활성화시킨 바이러스 개수가 동일하면, 전부 활성화 되었다는 뜻
        if new_virus_num == vacant_num:
            return time
        else:
            return -1
    # edge case
    if vacant_num == 0:
        return 0

    active_virus(0, [])

    if min_time == 1e9:
        return -1
    else:
       return min_time

print(solve())