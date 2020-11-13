function factor(num) {
  // determine if number is negative
  let negative = false;
  if (num < 0) {
    negative = true;
    num *= -1;
  }
  // generate basic factors
  let factorList = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      factorList.push([i, num / i]);
    }
  }
  // handle negative and positives
  if (negative) {
    factorList = factorList.map((pair) => [-pair[0], pair[1]]);
    factorList = factorList.concat(factorList.map((pair) => [-pair[0], -pair[1]]));
  } else {
    factorList = factorList.concat(factorList.map((pair) => [-pair[0], -pair[1]]));
  }
  console.log(factorList);
}

factor(0);

// console.log(factor(8));