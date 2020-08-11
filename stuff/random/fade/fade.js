window.onload = function() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var txt = url.searchParams.get("txt");
  if (txt[0] === '/') { txt = txt.substring(1); }
  document.getElementById('text').innerHTML = txt;
  document.getElementById('text').style.fontSize = '15em';
}