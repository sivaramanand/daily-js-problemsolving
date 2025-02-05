const arrayintersection = (arr1, arr2) => {
  var commonarr = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonarr.push(arr1[i]);
      }
    }
  }
  return commonarr;
};

console.log(arrayintersection([1, 2, 3, 4, 5, 6], [2, 4, 6]));
