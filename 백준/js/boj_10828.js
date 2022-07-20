const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const stack = [];
const answer = [];
const len = Number(input[0]);

for(let i=1; i<=len; i++){
    let cmd = input[i].split(' ');
    switch(cmd[0]) {
        case 'push':
            stack.push(cmd[1]);
            break;
        case 'pop':
            answer.push(stack.pop() || -1);
            break;
        case 'size':
            answer.push(stack.length);
            break;
        case 'empty':
            answer.push(stack[0] ? 0 : 1);
            break;
        case 'top':
            answer.push(stack[stack.length-1] || -1);
            break;
    }
}

console.log(answer.join('\n'));