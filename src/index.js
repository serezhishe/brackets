module.exports = function check(str, bracketsConfig) {
let stack = [];

for (let i = 0; i < str.length; i++) {
  let j = 0;
  while (bracketsConfig[j].indexOf(str[i]) == -1) j++;
  if (bracketsConfig[j][1] === bracketsConfig[j][0] && stack.length == 0) {
    stack.push(str[i]);
  } else {
    if (str[i] === bracketsConfig[j][1] && !stack.length) return false
    if (str[i] === bracketsConfig[j][1] && (stack[stack.length - 1] === bracketsConfig[j][0])) {
      stack.pop();
    } else 
     { 
       if (str[i] === bracketsConfig[j][0]) stack.push(str[i]);
    }
  }
}
return !stack.length
};

