import sys

sys.stdin = open("input.txt", "r")

N = int(input())

isEnd = False

def isGood(num):
    for i in range(1, len(num)//2+1):
        if num[-i:] == num[-i*2: -i]:
            return False
    return True

def dfs(num):
    global isEnd
    if isEnd:
        return
    if len(num) == N:
        print(num)
        isEnd = True
    for i in range(1, 4):
        if isGood(num+str(i)):
            dfs(num+str(i))

dfs("")