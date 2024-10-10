# 재귀함수로 dfs 구현
def solution(n, computers):
    answer = 0
    visited = [False] * n
    
    def dfs(curIdx):
        visited[curIdx] = True
        for i in range(n):
            if not visited[i] and computers[curIdx][i] == 1:
                dfs(i)
        
        
    for i in range(n):
        if not visited[i]:
            dfs(i)
            answer += 1
    return answer

# 스택으로 dfs 구현
from collections import deque

def solution(n, computers):
    answer = 0
    visited = [False] * n
    
    def dfs(start):
        stack = deque()
        stack.append(start)
        
        while stack:
            curNode = stack.pop()
            visited[curNode] = True
            for i in range(n):
                if not visited[i] and computers[curNode][i] == 1:
                    stack.append(i)
        
        
    for i in range(n):
        if not visited[i]:
            dfs(i)
            answer += 1
    return answer

# bfs 사용한 풀이
from collections import deque
def solution(n, computers):
    answer = 0
    visited = [False] * n
    
    def bfs(curIdx):
        queue = deque()
        queue.append(curIdx)
        while queue:
            curIdx = queue.popleft()
            for i in range(n):
                if not visited[i] and computers[curIdx][i] == 1:
                    queue.append(i)
                    visited[i] = True

        
    for i in range(n):
        if not visited[i]:
            bfs(i)
            answer += 1
            
    return answer