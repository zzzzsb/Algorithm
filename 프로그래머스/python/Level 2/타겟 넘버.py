def solution(numbers, target):
    answer = 0
    
    def dfs(idx, sum):
        nonlocal answer
        if idx == len(numbers):
            if sum == target:
                answer += 1
            return
        dfs(idx+1, sum+numbers[idx])
        dfs(idx+1, sum-numbers[idx])
        
    dfs(0,0)
    return answer