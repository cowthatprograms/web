onload = function() {
  a = document.getElementById('a');
  b = document.getElementById('b');
  c = document.getElementById('c');
  a1 = document.getElementById('answer1');
  a2 = document.getElementById('answer2');
  decimals = document.getElementById('decimals');
}

function solve() {
  let answer = quadratic(Number(a.value), Number(b.value), Number(c.value));
  if (!isNaN(answer[0])) {
    try {
      a1.innerHTML = answer[0].toFixed(decimals.value);
      a2.innerHTML = answer[1].toFixed(decimals.value);
    } catch {
      a1.innerHTML = answer[0];
      a2.innerHTML = answer[1];
    }
  } else {
    a1.innerHTML = '';
    a2.innerHTML = '';
  }
}

function quadratic(a, b, c) {
  let squareroot = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
  return [(-b + squareroot) / (2 * a), (-b - squareroot) / (2 * a)]
}