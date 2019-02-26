module.exports = function check(str, bracketsConfig) {
let _head;
let bool = 1;

class Stack {
  constructor(value, prev) {
   this.prev = prev || null;
   this.value = value || null;
   _head = this;
  }
  

   pop() {
   if (_head.prev) {
    _head = _head.prev;
  } else {
  if (_head.value !== null) {
  _head.value = null;
  } else {bool = 0;}
    }
  }
   
  
  push(value) {
    _head = new Stack(value, _head);
    }

}
   
let arr = str.split('');
let stack = new Stack(arr[0]);

for (let i = 1; i < arr.length; i++) {
  let j = 0;
  while (bracketsConfig[j].indexOf(arr[i]) == -1) j++;
  if (bracketsConfig[j][1] === bracketsConfig[j][0] && _head.value === null) {
    stack.push(arr[i]);
  } else {
    if (arr[i] === bracketsConfig[j][1] && (_head.value === bracketsConfig[j][0] || _head.value === null)) {stack.pop();} else 
     { 
       if (arr[i] === bracketsConfig[j][0]) stack.push(arr[i]); 
    }
  }
}


if (_head.value === null && bool) {return true} else
  {
    return false;
  }
};
