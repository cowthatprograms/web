onload = function() {
  time = document.getElementById('time');
  output = document.getElementById('output');
}

setInterval(function() {
  output.value = timeToEmotes(time.value);
}, 100)

function timeToEmotes(time) {
  time = time.match(/(\d{2}):(\d{2})\s?\/\s?(\d{2}):(\d{2})/);
  if (time === null) { return 'not a time you fool'; }
  let current = time[1] * 60 + Number(time[2]);
  let end = time[3] * 60 + Number(time[4]);
  let output = '▬'.repeat(Math.floor(30 * current / end)) + '🔘';
  while (output.length < 31) { output += '▬'; }
  return output;
}