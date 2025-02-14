function missingNumbersInaArray(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const longest_num = sortedArray[sortedArray.length - 1];
  console.log(longest_num);

  let missing_numbers = [];

  for (var i = 0; i < longest_num; i++) {
    if (!sortedArray.includes(i)) {
      missing_numbers.push(i);
    }
  }
  console.log(missing_numbers);
}
missingNumbersInaArray([1, 2, 4, 7, 14, 9]);
