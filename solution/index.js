const btn = document.getElementById("todo-button");

const todoInput = document.getElementById("todo-input");

const todoUl = document.getElementById("todo-ul");

window.onload = function () {
  todoInput.focus();
};

btn.addEventListener("click", (e) => {
  todoUl.innerHTML += `
  <li>
    <i class="fa fa-check"></i>
    <p>${todoInput.value}</p>
    <i class="fa fa-trash"></i>
  </li>`;

  todoInput.value = "";
});

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

todoUl.addEventListener("click", (e) => {
  //! Event sil butonlarinin birisinden geldiyse;
  if (e.target.classList.contains("fa-trash")) {
    //? ilgili li elementini silerek DOM'u güncelle:
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("fa-check")) {
    //? ilgili li elementinde checked adinda bir class varsa bunu sil:
    if (e.target.parentElement.classList.contains("checked")) {
      e.target.parentElement.classList.remove("checked");
    } else {
      //? ilgili li elementinde checked adinda bir class yoksa ekle:
      e.target.parentElement.classList.add("checked");
    }
  }
});
