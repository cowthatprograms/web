onload = function() {
  time = document.getElementById('time');
  output = document.getElementById('output');
}

setInterval(function() {
  output.value = timeToEmotes(time.value);
}, 100)

function timeToEmotes(time) {
  time = time.match(/(\d{1,2}):(\d{2})\s?\/\s?(\d{1,2}):(\d{2})/);
  if (time === null) { return 'not a time you fool'; }
  let current = time[1] * 60 + Number(time[2]);
  let end = time[3] * 60 + Number(time[4]);
  let output = '▬'.repeat(Math.floor(30 * current / end)) + '🔘';
  while (output.length < 31) { output += '▬'; }
  return output;
}

function copyOutput() {
  copyTextToClipboard(output.value);
}

function copyTextToClipboard(text) {
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