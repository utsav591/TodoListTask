const inputBox = document.getElementById("input-box");
const listConatiner = document.getElementById("list-container");
const text_edit = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listConatiner.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#10006";
    li.appendChild(span);
    let edit = document.createElement("div");
    edit.innerHTML = "edit";
    listConatiner.appendChild(div);
  }
  inputBox.value = " ";
  saveData();
}

listConatiner.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

text_edit.addEventListener(
  "click",
  function (e) {
    if (text_edit.innerText.toLowerCase() === "EDIT") {
      text_edit.removeAttribute("readonly");

      text_edit.focus();

      text_edit.innerText = "save";
      saveData();
    } else {
      text_edit.setAttribute("readonly", "readonly");

      text_edit.innerText = "Edit";
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listConatiner.innerHTML);
}

function showTask() {
  listConatiner.innerHTML = localStorage.getItem("data");
}
showTask();
