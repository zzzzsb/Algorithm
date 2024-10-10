def solution(arr):
    answer = [arr[0]]
    for num in arr:
        if answer[-1] != num:
            answer.append(num)
    return answer


# [-1:] 형태로 수정한 코드
def solution(arr):
    answer = []
    for num in arr:
        if answer[-1:] != [num]:
            answer.append(num)
    return answer

# or 연산자로 조건부 처리
def solution(arr):
    answer = []
    for num in arr:
        if len(answer) == 0 or answer[-1] != num:
            answer.append(num)
    return answer