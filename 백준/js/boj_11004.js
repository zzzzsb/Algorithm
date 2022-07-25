// 자바스크립트 내장 sort 메서드 사용
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(v => Number(v));;
const nums = input[1].split(" ").map(v => Number(v));

nums.sort((a, b)=> a - b);

console.log(nums[K-1]);


/*  Heap Sort - 시간 초과... ㅠㅠ */
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const [N, K] = input[0].split(" ").map(v => Number(v));;
// const nums = input[1].split(" ").map(v => Number(v));

function heapify(arr) {
    // 배열 -> 힙으로 재정렬하여 구성
    const n = arr.length;
    if(n <= 1) return;
    for(let i = Math.floor(n/2)-1; i>=0; i--){
        min_heapify(arr, n, i)
    }
}

function min_heapify(arr, n, i){
    let parent = i;
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    
    if(left < n && arr[left] < arr[parent]){
        parent = left;
    }
    if(right < n && arr[right] < arr[parent]){
        parent = right;
    }
    
    if(i != parent){
        swap(arr, i, parent);
        min_heapify(arr, n, parent);
    }
}

function swap(a, i, j){
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function _delete(arr){
    swap(arr, 0, arr.length-1);
    const min = arr.pop();
    
    heapify(arr);
    return min;
}

let result = 0;
heapify(nums);
for(let i=0; i<K; i++){
    result = _delete(nums);
}
console.log(result);