const checkparanthesis = (str) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    str[i] == '(' ? (count = count + 1) : (count = count - 1);
  }
  console.log(count);
  if (count !== 0) {
    return 'they are not balanced';
  } else {
    return 'they are balanced';
  }
};

const printparanthesis = checkparanthesis('(())(())');
console.log(printparanthesis);
