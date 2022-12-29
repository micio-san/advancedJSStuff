const formMain = document.querySelector(".form-main");
const inputMain = document.querySelector("input");
const list = document.querySelector(".list-container");
formMain.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();
  let text = inputMain.value;
  if (!text) {
    alert("Please Insert Value");
    return;
  }
  const item = document.createElement("li");
  item.classList.add("todo-container");
  item.innerHTML = `
  <form class="form-edit">
    <input type="text" class="input-edit" />
    <button type="submit" class="form-edit_btn">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
        ></path>
      </svg>
    </button>
  </form>
  <p class="todo-text">${text}</p>
  <div class="icons-container">
    <span class="btn-done">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
        ></path>
      </svg>
    </span>
    <span class="btn-edit">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            d="M16.626 3.132L9.29 10.466l.008 4.247 4.238-.007 7.331-7.332A9.957 9.957 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c1.669 0 3.242.409 4.626 1.132zm3.86-1.031l1.413 1.414-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z"
          ></path>
        </g>
      </svg>
    </span>
    <span class="btn-delete">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.037 3.225l1.684 10.104A2 2 0 005.694 15h4.612a2 2 0 001.973-1.671l1.684-10.104C13.627 4.224 11.085 5 8 5c-3.086 0-5.627-.776-5.963-1.775z"
        ></path>
        <path
          fill-rule="evenodd"
          d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </span>
  </div>
  `;
  list.appendChild(item);
  handleLogic(item);
  formMain.value = "";
}

function handleLogic(item) {
  const icons = item.querySelectorAll("span");
  icons.forEach((icon) => {
    let isDone = false;
    let text = item.querySelector(".todo-text");
    icon.addEventListener("click", (e) => {
      switch (e.target.classList[0]) {
        case "btn-done":
          isDone = !isDone;
          isDone
            ? ((text.style.textDecoration = "line-through"),
              (item.style.background = "#73e74d"))
            : ((text.style.textDecoration = "none"),
              (item.style.background = "none"));
          break;
        case "btn-edit":
          const changeForm = item.querySelector(".form-edit");
          const changeInput = item.querySelector(".input-edit");
          changeForm.classList.add("show");
          changeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!changeInput.value) {
              alert("Please Insert Value");
              return;
            }
            text.innerHTML = changeInput.value;
            changeForm.classList.remove("show");
          });
          break;
        case "btn-delete":
          list.removeChild(item);
          break;
      }
    });
  });
}
