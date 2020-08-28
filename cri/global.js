/* // reload page on resize
$(window).bind('resize', function() {
  this.location.reload(false);
}); */

function showBorder(id) {
  let elem = document.getElementById(id);
  elem.style.borderBottom = '2px solid #845EC2';
  elem.style.transform = 'translateY(-2px)';
}

function hideBorder(id) {
  let elem = document.getElementById(id);
  elem.style.borderBottom = '2px solid rgba(0, 0, 0, 0)';
  elem.style.transform = 'translateY(0px)';
}