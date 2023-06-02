import re

def solution(new_id):
    answer = ''
    # 1단계: 대문자 -> 소문자
    answer = new_id.lower()
    # 2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    answer = re.sub('[^a-z0-9-_.]', '', answer)
    # 3단계: 연속된 . 를 하나의 . 로 치환
    answer = re.sub('\.{2,}', '.', answer)
    # 4단계: .가 처음이나 끝에 위치하면 제거
    answer = re.sub('^\.|\.$', '', answer)
    # 5단계: 빈 문자열이면 a 대입
    if len(answer) == 0: 
        answer = 'a'
    # 6단계: 길이가 16이상이면, 첫 15개 문자 제외 나머지 문자 모두 제거, 
    if len(answer) >= 16:
        answer = answer[:15]
    # 제거후 .가 끝에 위치한다면 끝에 위치한 . 제거
    answer = re.sub('\.$', '', answer)
    # 7단계: 길이가 2이하면, 마지막 문자를 길이가 3이 될때까지 반복해서 붙임.
    if len(answer) <= 2:
        while len(answer) < 3:
            answer += answer[-1]
            
    return answer