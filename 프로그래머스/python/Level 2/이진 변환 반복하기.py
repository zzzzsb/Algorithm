def solution(s):
    answer = [0, 0]
    while s != "1":
        zero_cnt, one_cnt = 0, 0
        for i in range(0, len(s)):
            if s[i] == "0":
                zero_cnt += 1
            elif s[i] == "1": 
                one_cnt += 1
                
        answer[1] += zero_cnt
        s = format(one_cnt, "b")
        answer[0] += 1
            
    return answer