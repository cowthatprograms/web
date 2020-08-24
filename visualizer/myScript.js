onload = function() {
  input = document.getElementById('input')
  input.onchange = function(e){
    var sound = document.getElementById('myAudio');
    sound.src = URL.createObjectURL(this.files[0]);
    sound.onend = function(e) {
      URL.revokeObjectURL(this.src);
    }
  }
}