function findsubstring(mainstr, substr) {
  const sublength = substr.length;
  var flag = 0;
  var minstr = '';
  for (var i = 0; i < mainstr.length; i++) {
    for (var j = 0; j < sublength; j++) {
      var minstr = minstr + mainstr[i + j];
    }
    if (minstr === substr) {
      console.log('this is a substring');
      flag = flag + 1;
      break;
    } else {
      minstr = '';
    }
  }
  if (flag === 0) {
    console.log('no substring is contained here');
  }
}


findsubstring('asdfghjkl', 'hjl');
