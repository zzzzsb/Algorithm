/*
C: course length, O: orders array length, N: order length, K: course 값중에 N/2에 가장 가까운 수
time: O(C * O * NlogN * C(N,K))
space: O(C(N,K)) for map + O(C(N,K)) for answer
*/
function solution(orders, course) {
	var answer = [];
	for (let i = 0; i < course.length; i++) {
		// 조합 map
		const combMap = new Map();
		for (let j = 0; j < orders.length; j++) {
			combination(course[i], orders[j], combMap, "", 0);
		}
		//주문횟수가 max인 경우만 answer에 push
		getMaxOrder(combMap, answer);
	}

	answer.sort();
	return answer;
}

function combination(size, order, combMap, curStr, start) {
	let orderArr = order.split("");
	orderArr.sort();
	if (orderArr.length < size) return;

	if (curStr.length === size) {
		//console.log(curStr)
		if (combMap.has(curStr)) {
			combMap.set(curStr, combMap.get(curStr) + 1);
		} else {
			combMap.set(curStr, 1);
		}
		return;
	}
	/*
	ABCFG 0~4까지
	comb("",0) -> c("A",1) -> c("AB",2)
						 -> c("A",2) -> c("AC",2)
						 -> c("A",3) -> AF
						 -> c("A",4) -> AG
						 -> c("B",2)
						 -> c("B",3)
						 -> c("B",4)
	*/
	for (let i = start; i < orderArr.length; i++) {
		combination(size, order, combMap, curStr + orderArr[i], i + 1);
  }
}

function getMaxOrder(map, answer) {
	let max = 0;
	for (let value of map.values()) {
		if (max < value) max = value;
	}
	for (let [key, value] of map) {
		if (max === value && max >= 2) {
			answer.push(key);
		}
	}
}
