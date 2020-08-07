window.onload = function(x) {
  if (x.matches) {
    document.getElementById('geteaten').style.fontSize = '96px';
  } else {
    document.getElementById('geteaten').style.fontSize = '15em';
  }
}

var x = window.matchMedia("(max-width: 1000px)")
x.addListener(myFunction)