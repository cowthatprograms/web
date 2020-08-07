// sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

onload = async function() {
  for (let i = 1000; i > 0; i--) {
    await sleep(30)
    document.getElementById('countdown').innerHTML = i;
  };
}