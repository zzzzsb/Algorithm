import sys

sys.stdin = open('input.txt', 'r')

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