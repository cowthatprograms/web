var txt;

async function fadein() {
  document.getElementById('background').style.display = 'block';
  document.getElementById('fadeintext').innerHTML = txt;
  document.getElementById('fadeintext').style.display = 'block';
  await sleep(500);
  document.getElementById('fadeintext').style.opacity = '1';
  document.getElementById('fadeintext').style.fontSize = '15em';
}

function input() {
  txt = document.getElementById('textinput').value;
  document.getElementById('textinput').style.display = 'none';
  fadein();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}