const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
/*
3
 0 1 2
[1,2,3] [] -> [2,3] [1,] -> [3] [1,2] -> [] [1,2,3]
                         -> [2] [1,3] -> [] [1,3,2]
           -> [1,3] [2,]        
*/
const result = [];
const arr = [];
for(let i=1; i<=n; i++) arr.push(i);

function getPermutations(arr, permutation){
    if(permutation.length === n){
        result.push(permutation.join(" "));
    }
    for(let i=0; i<arr.length; i++){
        let rest = [...arr.slice(0,i) , ...arr.slice(i+1)];
        permutation.push(arr[i]);
        getPermutations(rest, permutation);
        permutation.pop();
    }
}

getPermutations(arr, []);
console.log(result.join("\n"))