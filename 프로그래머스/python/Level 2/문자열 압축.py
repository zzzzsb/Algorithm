# 처음 풀이
def solution(s):
    answer = len(s)
    for i in range(1, (len(s)//2) + 1):
        answer = min(answer, str_compress(s, i))
    return answer

def str_compress(s, step):
    index = 0
    cnt = 1
    temp_str = ""
    comp_str = ""
    
    while True:
        cut_idx = index + step
        
        # 문자열 step 단위로 자르기
        if cut_idx <= len(s):
            cut_str = s[index:cut_idx]
        else:
            cut_str = s[index:]
                    
        if temp_str == cut_str:
            cnt += 1
        else:
            if cnt > 1:
                comp_str += (str(cnt)+temp_str)
                cnt = 1
            else:
                comp_str += temp_str

        # 종료조건
        if cut_idx >= len(s):
            if temp_str == cut_str:
                comp_str += (str(cnt)+temp_str)
            else:
                comp_str += cut_str
            break
            
        temp_str = cut_str
        index += step
        
    return len(comp_str)



# 리팩토링 한 개선 코드
def solution(s):
    answer = len(s)
    for step in range(1, (len(s)//2) + 1): # step 단위로 문자 자르기
        answer = min(answer, compress_str(s, step))
    return answer

def compress_str(s, step):
    temp_str = s[:step]  # 첫번째 문자 미리 자르기
    cnt = 1
    comp_str = ""
    
    for i in range(step, len(s)+step, step):
        cut_str = s[i: i+step]
        if temp_str == cut_str:
            cnt += 1
        else:
            if cnt > 1: # 앞에서 반복 문자열 있었음
                comp_str += (str(cnt) + temp_str)
            else: # 앞에서 반복문자열 없었음
                comp_str += temp_str
            temp_str = cut_str
            cnt = 1
    
    return len(comp_str)