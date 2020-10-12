onload = function() {
  // set attributes for input fields
  tableNameInput = document.getElementById('table-name');
  tableNameInput.setAttribute('maxlength', 50); tableNameInput.setAttribute('placeholder', 'Enter the name of your table...');
  columnNamesInput = document.getElementById('column-names');
  columnNamesInput.setAttribute('maxlength', 50); columnNamesInput.setAttribute('placeholder', 'Enter the column names...');
  tableNameInput.addEventListener('keydown', event => {
    if (event.keyCode === 13) { enterTableName(tableNameInput, columnNamesInput); }
  });
  columnNamesInput.addEventListener('keydown', event => {
    if (event.keyCode === 13) { enterColumnNames(tableNameInput, columnNamesInput); slide(); }
  });
  columns = []; // creates empty column object
}

var inputchecker = setInterval(function() {
  if (tableNameInput.value.match(/\s/)) { tableNameInput.style.backgroundImage = 'linear-gradient(to bottom right, #ff553e, #ff3000)'; }
  else { tableNameInput.style.backgroundImage = 'linear-gradient(to bottom right, #00c6fb, #005bea)'; }
  if (columnNamesInput.value.match(/(?<!,)\s/)) { columnNamesInput.style.backgroundImage = 'linear-gradient(to bottom right, #ff553e, #ff3000)'; }
  else { columnNamesInput.style.backgroundImage = 'linear-gradient(to bottom right, #00c6fb, #005bea)'; }
}, 100);

function enterTableName(tableNameInput, columnNamesInput) {
  tableName = tableNameInput.value; tableNameInput.setAttribute('readonly', true);
  tableNameInput.style.cursor = 'context-menu'; tableNameInput.style.opacity = 0.3; tableNameInput.style.transform = 'none';
  columnNamesInput.style.transform = 'none'; columnNamesInput.focus();
}

function enterColumnNames(tableNameInput, columnNamesInput) {
  columnNames = columnNamesInput.value.replace(/ /g, '').split(','); columnNamesInput.setAttribute('readonly', true);
  columnNamesInput.style.cursor = 'context-menu'; columnNamesInput.style.opacity = 0.3;
  for (let i = 0, l = columnNames.length; i < l; i++) { // run a loop for each value in columnNames
    columns[i] = document.createElement('input'); // create the input field
    // set attributes for the input
    columns[i].setAttribute('placeholder', `Values for ${columnNames[i]}...`); columns[i].setAttribute('class', 'input column');
    columns[i].setAttribute('autocomplete', 'off'); columns[i].setAttribute('spellcheck', 'false');
    let inputHolder = document.getElementById('input-holder');
    inputHolder.insertBefore(columns[i], inputHolder.firstChild); // add the input to the document
    columns[i].style.transform = 'translateX(-100vw)'; // hide the element
    columns[i].addEventListener('keydown', event => {
      if (event.keyCode === 13) { slide(); }
    });
  }
  document.getElementById('input-holder').style.marginTop = `-${192 * columnNames.length}px`;
  clearInterval(inputchecker);
}

function slide() {
  let num = count();
  if (num === columnNames.length) { showSql(columns[num - 1]); return }
  let inputHolder = document.getElementById('input-holder');
  inputHolder.style.transform = `translateY(${parseInt(inputHolder.style.transform.toString().match(/.*?(-?\d+).*/)[1]) + 192}px)`;
  columns[num].style.transform = 'none';
  if (num != 0) columns[num - 1].style.opacity = 0.5;
  columns[num].focus();
}

async function showSql(lastInput) {
  // remove the input fields from the screen
  lastInput.style.opacity = 0.5;
  columns.reverse();
  for (column of columns) {
    column.style.transition = '0.5s';
    column.style.transform = 'translateY(-200vh)';
    await sleep(200);
  }
  for (input of ['column-names', 'table-name']) {
    input = document.getElementById(input);
    input.style.transition = '0.5s';
    input.style.transform = 'translateY(-200vh)';
    await sleep(200);
  }
  document.getElementById('input-holder').remove();
  columns.reverse();
  // create the output sql
  sqlstring = `INSERT INTO ${tableName} (${columnNames.join(', ')}) VALUES `;
  for (let i = 0, l = columns.length; i < l; i++) { columns[i] = columns[i].value.replace(/,\s/g, ',').split(','); }
  // create the pairings
  for (let i = 0, l = columns[i].length; i < l; i++) {
    let valuegroup = '(';
    for (let j = 0, l = columns.length; j < l; j++) { valuegroup += (isNaN(columns[j][i]) ? `'${columns[j][i]}'` : columns[j][i]) + ', '; }
    sqlstring += valuegroup.slice(0, -2) + '), ';
  }
  sqlstring = sqlstring.slice(0, -2) + ';'
  // create the div it will be displayed in
  let sqlOutput = document.createElement('div');
  sqlOutput.innerHTML = sqlstring;
  sqlOutput.setAttribute('class', 'sql');
  document.body.appendChild(sqlOutput);
  sqlOutput.style.transition = '0.5s transform';
  sqlOutput.style.marginTop = '1000px';
  await sleep(200);
  sqlOutput.style.transform = 'translateY(-1000px)';
  await sleep(500);
  sqlOutput.style.transition = 'none';
  sqlOutput.removeAttribute('style');
  sqlOutput.setAttribute('onclick', 'copySql(sqlstring)');
}

function copySql(text) {
  alert(`Copied the following text: ${text}`);
  copyTextToClipboard(text);
}

var count = (function () {
  var counter = -1;
  return function () { counter += 1; return counter }
})();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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