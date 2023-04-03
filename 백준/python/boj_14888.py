import sys

sys.stdin = open("input.txt", "r")

N = int(input())
num = list(map(int, input().split(" ")))
op = list(map(int, input().split(" ")))

max_num = -1e9
min_num = 1e9

def dfs(idx, res):
    global max_num
    global min_num
    if idx == N:
        max_num = max(max_num, res)
        min_num = min(min_num, res)
        return

    for i in range(4):
        if op[i]==0:
            continue

        op[i] -= 1
        if i == 0:
            dfs(idx+1, res+num[idx])
        elif i == 1:
            dfs(idx+1, res-num[idx])
        elif i == 2:
            dfs(idx+1, res*num[idx])
        elif i == 3:
            if res < 0:
                dfs(idx+1, -int(-res / num[idx]))
            else:
                dfs(idx+1, int(res / num[idx]))

        op[i] += 1

dfs(1, num[0])
print(max_num)
print(min_num)





