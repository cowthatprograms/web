function download(num) {
  let filename;
  if (num === 1) {filename = 'cri-encode.py'}
  fetch('http://legendcow.com/cri/tools/' + filename)
  .then(resp => resp.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'lol.py';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  })
  .catch(() => alert('something went wrong lol'));
}