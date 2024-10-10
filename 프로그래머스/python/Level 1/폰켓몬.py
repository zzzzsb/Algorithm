# set 자료구조 
def solution(nums):    
    nums_set = set(nums)
    
    if len(nums_set) > len(nums) / 2:
        return len(nums) / 2
    else:
        return len(nums_set)

# 코드 개선
def solution(nums):
		return min(len(set(nums), len(nums) / 2))

# 딕셔너리 사용
def solution(nums):
    nums_map = {}
    
    for num in nums:
        if not num in nums_map:
            nums_map[num] = True
    
    return min(len(nums_map), len(nums) / 2)