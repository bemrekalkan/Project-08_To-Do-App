//? selectors:
const btn = document.getElementById("todo-button");

const todoInput = document.getElementById("todo-input");

const todoUl = document.getElementById("todo-ul");

//? make input active at startup:
window.onload = function () {
  todoInput.focus();
};

//? addEventListener for ADD button:
btn.addEventListener("click", (e) => {
  if (!todoInput.value) {
    alert(`Please enter your todo`);
  } else {
    todoUl.innerHTML += `
        <li>
          <i class="fa fa-check"></i>
          <p>${todoInput.value}</p>
          <i class="fa fa-trash"></i>
        </li>`;

    todoInput.value = "";
  }
});

//? Calling the click function of the add button by pressing the enter key from the keyboard:
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btn.click();
  }
});

//? addEventListener for delete and ok buttons:
todoUl.addEventListener("click", (e) => {
  //! If the event came from one of the delete buttons;
  if (e.target.classList.contains("fa-trash")) {
    //? Update the DOM by deleting the corresponding li element!
    e.target.parentElement.remove();
  }

  //! If the event came from one of the delete and ok buttons;
  if (e.target.classList.contains("fa-check")) {
    //? If there is a class named checked in the relevant li element, delete it!
    if (e.target.parentElement.classList.contains("checked")) {
      e.target.parentElement.classList.remove("checked");
    } else {
      //? If there is no class named checked in the relevant li element, add!
      e.target.parentElement.classList.add("checked");
    }
  }
});
