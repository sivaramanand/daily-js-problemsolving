const checkamstrongNumbers = num => {
  const numtostr = num.toString();
  const numlength = numtostr.length;
  let sum = 0;
  for (let i = 0; i < numlength; i++) {
    let indnumber = parseInt(numtostr[i]);
    let powered = indnumber ** numlength;
    sum = sum + powered;
  }

  return num === sum;
};

const printamstrongnumbers = checkamstrongNumbers(9474);
console.log(printamstrongnumbers);
