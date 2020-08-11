window.onload = function() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var txt = url.searchParams.get("txt");
  if (txt[0] === '/') { txt = txt.substring(1); }
  if (txt.startsWith('eNc')) {
    txt = txt.substring(3);
    txt = atob(txt);
  }
  document.getElementsByTagName('title').innerHTML = `Fade - ${txt}`;
  document.getElementById('text').innerHTML = txt;
  var len = txt.length;
  if (len <= 15) {
    document.getElementById('text').style.fontSize = '14vw';
  } else if (len > 15 && len < 20) {
    document.getElementById('text').style.fontSize = '11vw';
  } else {
    document.getElementById('text').style.fontSize = '8vw';
  }
}