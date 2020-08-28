function download(num) {
  let filename;
  if (num === 1) {filename = 'cri-encoder.py'}
  else if (num === 2) {filename = 'cri-decoder.py'}
  else if (num === 3) {filename = 'cri-encoder-condensed.py'}
  else if (num === 4) {filename = 'cri-decoder-condensed.py'}
  fetch('http://legendcow.com/cri/tools/' + filename)
  .then(resp => resp.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  })
  .catch(() => alert('something went wrong lol'));
}