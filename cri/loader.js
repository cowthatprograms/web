onload = function() {
  refresh();
}

async function refresh() {
  // await sleep(1000)
  // remove loading screen
  let wrapper = document.getElementById('loader-wrapper')
  wrapper.style.opacity = '0';
  let content = document.getElementById('content');
  
  // insert navbar
  let navbar = document.getElementById('navbar');
  navbar.style.top = '50%';

  // insert title
  let title = document.getElementById('title');
  if (window.innerWidth > 1280) {
    title.style.marginTop = '10vh';
  } else {
    title.style.marginTop = '8px';
  }

  await sleep(500)
  content.style.opacity = '1'; // fade in content
  await sleep(500) // wait for fade in
  // remove transition and wrapper
  content.style.transition = 'none';
  document.body.removeChild(wrapper)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}