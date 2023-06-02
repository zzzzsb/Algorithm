def solution(word):
    word_dict = []

    def make_word(curWord):
        if len(curWord) != 0: 
            word_dict.append(curWord)
        if len(curWord) == 5:
            return
        
        vowel = ['A', 'E', 'I', 'O', 'U']
        for v in vowel:
            make_word(curWord+v)
            
    make_word("")
    return word_dict.index(word) + 1