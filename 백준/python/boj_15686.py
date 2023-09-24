"""
풀이 1
"""

"""
N개줄 도시정보
M 최대 치킨집 수

0:빈칸, 1:집, 2:치킨집
치킨거리 = 집과 가장 가까운 치킨집 사이의 거리
각각의 집은 치킨거리를 가지고 있음

도시의 치킨거리 = 모든 집의 치킨거리 합

집에서 모든 치킨집까지의 거리 계산, 제일 짧은 치킨거리.

==> 치킨집 개수 중에서 M개를 택했을 때 최소값.

1) 치킨집 좌표 찾아 넣기
chicken = [[a,b],[a,b]...]
- M개 택하기

2) 치킨거리 계산
- 택한 M개 좌표...
- 집을 발견했을때, 해당 집에서 M개 치킨집 까지의 거리를 모두 계산한다. 
  최솟값을 갱신하며 계산하고, M개 전부다 순회했으면 최소거리를 dist 배열에 넣는다.
- dist 배열의 모든 합을 계산, 최소값이면 min_dist 갱신
"""

import sys
sys.stdin = open('input.txt', 'r')

N, M = map(int, input().split())
city = [list(map(int, input().split())) for _ in range(N)]

house = []
chicken = []

# 집, 치킨집 좌표 찾기
for i in range(N):
    for j in range(N):
        if city[i][j] == 1:
            house.append([i, j])
        elif city[i][j] == 2:
            chicken.append([i, j])

# M개 택하기
visited = [False] * len(chicken)
c_dists = []

# 집의 치킨거리 구하기
def house_chicken_dist(x, y, chicken):
    h_dist = []
    for idx in range(len(chicken)):
        cur_chicken = chicken[idx]
        dist = abs(x - cur_chicken[0]) + abs(y - cur_chicken[1])
        h_dist.append(dist)
    h_dist.sort()
    return h_dist[0]

# M개 선택한 도시의 치킨거리 구하기
def city_chicken_dist(chicken):
    c_dist = []
    for idx in range(len(house)):
        cur_house = house[idx]
        i,j = cur_house[0], cur_house[1]
        c_dist.append(house_chicken_dist(i, j, chicken))
    return sum(c_dist)

def dfs(idx, cur, cnt):
    # M개 치킨집 선택 다 했을 경우
    if cnt == M:
        # 현재 도시의 치킨거리 구하기
        c_dist = city_chicken_dist(cur)
        c_dists.append(c_dist)
    for i in range(idx, len(chicken)):
        if not visited[i]:
            visited[i] = True
            cur.append(chicken[i])
            dfs(i + 1, cur, cnt + 1)
            visited[i] = False
            cur.pop()


dfs(0, [], 0)
c_dists.sort()
print(c_dists[0])



"""
풀이 2
"""

import sys

sys.stdin = open('input.txt', 'r')

"""
N*N 도시
0:빈칸, 1:집, 2:치킨집
치킨거리: 집과 가장 가까운 치킨집 사의의 거리

폐업시키지 않을 치킨집을 최대 M개 골랐을때, 도시 치킨거리의 최솟값 출력하기
"""

"""
1. 배열에 집, 치킨집의 좌표 저장
2. 좌표 배열에서 M개만 선택해 새로운 차킨집 좌표배열 생성
3. M개 선택한 치킨집 좌표배열 상태에서 치킨거리 계산
    - 집 좌표 하나씩 돌면서 치킨거리 계산(min)
    - 다 더해줌
"""

N, M = map(int, input().split())
city = [list(map(int, input().split())) for _ in range(N)]

# 집, 치킨집 좌표 저장
house_loc = []
chicken_loc = []
for i in range(N):
    for j in range(N):
        if city[i][j] == 1:
            house_loc.append([i, j])
        if city[i][j] == 2:
            chicken_loc.append([i, j])


# 치킨집 M개 선택했을때 도시의 치킨거리 구하는 함수
def cal_chicken_dist(chicken_loc):
    chicken_dist_arr = []
    for [hx, hy] in house_loc:
        min_chicken_dist = 1e9
        for [cx, cy] in chicken_loc:
            cur_chicken_dist = abs(hx - cx) + abs(hy - cy)
            if cur_chicken_dist < min_chicken_dist:
                min_chicken_dist = cur_chicken_dist
        chicken_dist_arr.append(min_chicken_dist)
    return sum(chicken_dist_arr)


# M개의 치킨집 선택하는 함수
def choose_chicken_house(idx, cur_chicken_loc):
    global min_chicken_dist
    if len(cur_chicken_loc) == M:
        # 치킨거리 계산
        cur_chicken_dist = cal_chicken_dist(cur_chicken_loc)
        if cur_chicken_dist < min_chicken_dist:
            min_chicken_dist = cur_chicken_dist
        return

    # 0 1 2 3 4 5 6 7 8 9
    for i in range(idx, len(chicken_loc)):
        if not visited[i]:
            cur_chicken_loc.append(chicken_loc[i])
            visited[i] = True
            choose_chicken_house(i + 1, cur_chicken_loc)
            visited[i] = False
            cur_chicken_loc.pop()


min_chicken_dist = 1e9
visited = [False] * len(chicken_loc)
choose_chicken_house(0, [])

print(min_chicken_dist)
