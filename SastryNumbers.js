const sastrynumbers = (num) => {
  const nextnum = num + 1;
  let numStr = num.toString();
  let nextnumStr = nextnum.toString();
  const str = numStr + nextnumStr;
  const squareroot = Math.sqrt(parseInt(str));
  let finalstring = squareroot.toString();
  if (finalstring.includes('.')) {
    console.log('it is not a sastry string');
  } else {
    console.log('it is a sastry string');
  }
};

sastrynumbers(328);
