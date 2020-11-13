function findFactors(num) {
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
  return factorList;
}

function getFactorPair(b, c) {
  // handle c = 0
  if (c === 0) { return [0, b]; }
  for (pair of findFactors(c)) {
    // console.log(pair);
    if (pair[0] + pair[1] === b) {
      return pair;
    }
  }
}

function greatestFactor(a, b, c) {
  for (let i = a; i > 1; i--) {
    if (!(a % i || b % i || c % i)) {
      return i;
    }
  }
  return 1;
}

function factor(a, b, c, letter) {
  // find the gcf and divide
  let gcf = greatestFactor(a, b, c);
  b /= gcf;
  c /= gcf;
  let factorPair = getFactorPair(b, c);
  // format
  let [x, y] = factorPair;
  let output = (gcf != 1 ? gcf : '') + `(${letter} ${x > 0 ? '+' : '-'} ${Math.abs(x)})(${letter} ${y > 0 ? '+' : '-'} ${Math.abs(y)})`;
  console.log(output);
}

function factorEquation(equation) {
  // organize variables
  let parts = equation.match(/(–?\d+)?(\w)\d\+?(–?\d+)\w\+?(–?\d+)/);
  parts[1] = parts[1] ? parts[1] : '1';
  let [a, b, c, letter] = [parts[1], parts[3], parts[4], parts[2]];
  [a, b, c] = [a, b, c].map((num) => Number(num.replace('–', '-')));
  // console.log({a, b, c, letter})
  // console.log(parts);
  // factor
  factor(a, b, c, letter);
}

factorEquation('6d2–48d+42')