const name = document.getElementById('name');
const content = document.getElementById('content');
const add = document.getElementById('add');

function addHandler() {
  const td = document.createElement('td');
  td.innerHTML = name.value;
}

add.addEventListener('click', () => addHandler());
