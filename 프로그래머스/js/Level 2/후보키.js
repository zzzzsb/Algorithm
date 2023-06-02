/*
0   1   2   3
학번 이름 전공 학년

0 가능
1,2 가능
1,2,3 불가능 (3제외했을때 최소성 깨지기때문에)
*/
function solution(relation) {
  var answer = 0;

  //인덱스 조합
  const subset = [];
  //후보키 되는 조합
  const set = new Set();

  function comb(cnt, max, start) {
    //내가 원하는 개수 조합 만들어졌으면
    if (cnt === max) {
      //console.log(subset)
      //console.log(set)
      // 최소성 확인 (인덱스 중복 검사)
      let isMin = true;
      let sArr = Array.from(set);
      //console.log(sArr)
      for (let i = 0; i < sArr.length; i++) {
        let isContain = true;
        //현재 조합이 후보키에 포함되는지 검사
        for (let j = 0; j < sArr[i].length; j++) {
          if (subset.indexOf(sArr[i][j]) === -1) {
            isContain = false;
            break;
          }
        }
        if (isContain) {
          isMin = false;
          break;
        }
      }
      if (isMin) {
        //유일성 확인
        const dict = {};
        let isOnly = true;
        for (let i = 0; i < relation.length; i++) {
          //인덱스 조합에 해당하는 속성들 가져오기
          let temp = relation[i]
            .filter((elem, idx) => {
              return subset.indexOf(idx) !== -1;
            })
            .join("");
          console.log(temp);
          if (!dict[temp]) {
            dict[temp] = 1;
          }
          //겹치면
          else {
            isOnly = false;
            break;
          }
        }
        if (isOnly) {
          set.add([...subset]);
        }
        console.log(dict);
      }

      return;
    }

    for (let i = start; i < relation[0].length; i++) {
      subset.push(i);
      comb(cnt + 1, max, i + 1);
      subset.pop();
    }
  }

  for (let i = 1; i <= relation[0].length; i++) {
    comb(0, i, 0);
  }

  return set.size;
}
