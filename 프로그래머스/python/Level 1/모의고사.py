def solution(answers):
    answer = []
    pattern = [[1,2,3,4,5], [2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    score = []
    for p in pattern:
        idx = 0
        cnt = 0
        for i in range(len(answers)):
            if idx == len(p):
                idx = 0
            if answers[i] == p[idx]:
                cnt += 1
            idx += 1
        score.append(cnt)
    high_score = max(score)
    for i in range(len(score)):
        if score[i] == high_score:
            answer.append(i+1)
            
    return answer

# enumerate() 사용
def solution(answers):
    answer = []
    pattern = [[1,2,3,4,5], [2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]]
    score = []
    for p in pattern:
        cnt = 0
        for i, a in enumerate(answers):
            if a == p[i%len(p)]:
                cnt += 1
        score.append(cnt)
    
    high_score = max(score)

    for i in range(len(score)):
        if score[i] == high_score:
            answer.append(i+1)
    return answer