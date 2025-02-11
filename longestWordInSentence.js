longword = (sent) => {
  let longestword = '';
  let longwordlength = 0;

  const sentarray = sent.split(' ');
  sentarray.map((item) => {
    if (item.length > longwordlength) {
      longwordlength = item.length;
      longestword = item;
    }
  });

  return longestword;
};

const printlongword = longword(
  'the greatest trick the devil ever pulled was hippopotamus'
);

console.log(printlongword);
