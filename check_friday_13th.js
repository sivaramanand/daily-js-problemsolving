const checkFridaythe13th = (year, month) => {
  let time = new Date(year, month - 1, 13);
  let day = time.getDay();
  if (day === 5) {
    console.log('this month has a friday falling on 13th');
  } else {
    console.log('this month does not have a friday falling on 13th');
  }
};

checkFridaythe13th(2024, 9);
