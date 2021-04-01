onload = function() {
  character = document.getElementById('character');
  output = document.getElementById('output');
  size = document.getElementById('size');
}

function generateE(s = size.value) {
  let c = character.value;
  let e = [(c.repeat(s*3) + '<br>').repeat(s),
  (c.repeat(s) + '<br>').repeat(s),
  (c.repeat(s*3) + '<br>').repeat(s),
  (c.repeat(s) + '<br>').repeat(s),
  (c.repeat(s*3) + '<br>').repeat(s)].join('').slice(0, -4);
  output.innerHTML = e;
}

function copyE(text = output.innerHTML) {
  text = text.replace(/<br>/g, '\n');
  var textArea = document.createElement("textarea");
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}