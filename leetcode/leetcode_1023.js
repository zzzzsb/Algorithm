// https://leetcode.com/problems/camelcase-matching/
// 1023. Camelcase Matching

// Solution #1
var camelMatch = function(queries, pattern) {
  const res=[];
  for(const str of queries){
      //console.log(matchPattern(str, pattern))
      res.push(matchPattern(str, pattern));
  }
  return res;
};
//Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], 
//pattern = "FB"
// Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], 
//pattern = "F o B a"
//str["FBsss"]
//pattern FBo
function matchPattern(str, pattern){
  let patternIdx=0;
  for(let i=0; i<str.length; i++){
      const s = str[i];
      if(patternIdx < pattern.length && s === pattern[patternIdx]){
          patternIdx++;
      } else if("A".charCodeAt(0)<= s.charCodeAt(0) && s.charCodeAt(0)<="Z".charCodeAt(0)){
          return false;
      }
  }
  return patternIdx === pattern.length;
}



/*
curPattern과 curWord[j]를 비교.
    -끝까지 봤는데 같은게 없으면 answer[i]=false
    -같은게 나오면 curPattern=pattern[index+1]로 바꿔주고, 다음거랑 또 비교.
        - 끝까지 봤는데 같은게 없으면 answer[i]=false
        - 같은게 나오면 curPattern=pattern[index+1]로 바꿔주고 비교. 언제까지? curPattern이 마지막 패턴일때까지.
    -마지막 패턴도 같은게 나옴. 그러면 나머지를 본다.
        - 나머지에서 대문자가 나와버리면 false. 
        - 대문자 없고 소문자만 있으면 true
        
Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
Output: [true,false,true,true,false]
*/
// Solution #2
var camelMatch = function (queries, pattern) {
	const result = [];

	for (let i = 0; i < queries.length; i++) {
		let q = 0, p = 0;
		const query = queries[i];
    result.push(true);
    // ForceFeedBack
    // FoaT
		while (p < pattern.length && q < query.length) {
			const pa = pattern[p];
			const qu = query[q];
            if(pa === qu){
                p++;
                q++;
            } 
            else if (isUpperCase(qu)){
                result[i]=false;
                break;
            }
            else q++; 
		}

		while (p < pattern.length) {
			if (isUpperCase(pattern[p])) {
				result[i] = false;
				break;
			}
			p++;
		}
		while (q < query.length) {
			if (isUpperCase(query[q])) {
				result[i] = false;
				break;
			}
			q++;
		}
	}
	return result;
};

function isUpperCase(ch) {
	return ch === ch.toUpperCase();
}