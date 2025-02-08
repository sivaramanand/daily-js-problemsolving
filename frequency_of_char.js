const frqOfChar = (s) => {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    let char = str[i];

    if (freq[char]) {
      freq[char] += 1;
    } else {
      freq[char] = 1;
    }
  }

  console.log(obj);
};

frqOfChar('kelly tester');
