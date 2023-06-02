def solution(arr):
    answer = [0, 0]
    
    def compress(x, y, N):
        num = arr[x][y]
        for i in range(x, x + N):
            for j in range(y, y + N):
                if arr[i][j] != num:
                    N = N // 2
                    compress(x, y, N)
                    compress(x+N, y, N)
                    compress(x, y+N, N)
                    compress(x+N, y+N, N)
                    return               
        answer[num] += 1  
        
    compress(0, 0, len(arr))                
    return answer