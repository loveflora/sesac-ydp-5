const spanList = document.querySelectorAll("span");
const table = document.querySelector("table");
const thList = table.querySelectorAll("th");
const name = document.getElementById("name");
const content = document.getElementById("content");
const add = document.getElementById("add");

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();

for (let span of spanList) {
  span.style.textAlign = "center";
  span.style.display = "inline-block";
  span.style.width = "50px";
}

for (let th of thList) {
  th.style.border = "1px solid black";
}

content.style.width = "500px";

table.style.border = "1px solid";
table.style.textAlign = "center";

table.style.width = "500px";

let idx = 0;

function addHandler() {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");

  idx += 1;

  td1.innerHTML = idx;
  td2.innerHTML = name.value;
  td3.innerHTML = content.value;
  td4.innerHTML = `${year}-${month}-${day} ${hour} : ${minute}`;

  document.querySelector("tbody").append(tr, td1, td2, td3, td4);

  const tdList = table.querySelectorAll("td");

  for (let td of tdList) {
    td.style.border = "1px solid black";
  }

  name.value = "";
  content.value = "";
}

add.addEventListener("click", () => addHandler());
