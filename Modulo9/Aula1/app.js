const formAddTodo = document.querySelector(".form-add-todo");
const inputSearch = document.querySelector(".form-search input");
const todosContainer = document.querySelector(".todos-container");

formAddTodo.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputValue = event.target.add.value.trim();

  if (inputValue.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${inputValue}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    event.target.reset();
  }
});

todosContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;

  if(clickedElement.classList.contains("delete")) {
    clickedElement.parentNode.remove()
  }
});

inputSearch.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim().toLowerCase();
  Array.from(todosContainer.children)
  .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
  .forEach(todo => {
    todo.classList.remove("d-flex");
    todo.classList.add("hidden");
  });

  Array.from(todosContainer.children)
  .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
  .forEach(todo => {
    todo.classList.add("d-flex");
    todo.classList.remove("hidden");
  });

})