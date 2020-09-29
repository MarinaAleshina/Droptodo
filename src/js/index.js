import "../styles/style";
import tasks from "../assets/tasks.json";
import { getObjectOfTasks } from "./helpers/getObjectOfTasks";
import { renderAllTasks } from "./views/renderAllTasks";
import userInterfaceElements from "./config/ui.config";
import { validate } from "./helpers/validate";
import { createNewTask } from "./helpers/createNewTask";
import { listItemTemplate } from "./helpers/taskTemplate";
import { setShowError, setSuccessFor } from "./views/form";
import { createModal } from "./helpers/createModal";
import { drag } from "./helpers/drag";

const {
  form,
  inputTitle,
  inputBody,
  taskContainer,
  containerTasks
} = userInterfaceElements;

const inputs = [inputTitle, inputBody];

const objOfTasks = getObjectOfTasks(tasks);

renderAllTasks(objOfTasks);

//Events;

inputs.forEach(input =>
  input.addEventListener("focus", function() {
    setSuccessFor(input);
  })
);

drag();

window.addEventListener("unload", () => {
  localStorage.setItem("tasks", JSON.stringify(objOfTasks));
});

containerTasks.addEventListener("click", e => {
  const target = e.target;
  if (target.classList.contains("task-delete-btn")) onModal(target);
});

form.addEventListener("submit", onFormSubmitHandler);

/**
 * /function onFormSubmitHandler
 *
 * @param {event} e
 */

function onFormSubmitHandler(e) {
  e.preventDefault();

  const isValid = inputs.every(input => {
    const isValidInput = validate(input);
    if (!isValidInput) {
      setShowError(input, "Поле должно быть заполнено");
    }
    return isValidInput;
  });

  if (!isValid) return;

  const titleValue = inputTitle.value;
  const bodyValue = inputBody.value;

  let newTask = createNewTask(titleValue, bodyValue, objOfTasks);

  objOfTasks[newTask._id] = newTask;

  const li = listItemTemplate(newTask);
  taskContainer.insertAdjacentElement("afterbegin", li);
  form.reset();
}

/**
 *Function onModal Open modal window
 *
 * @param {HTMLButtonElement} target
 */

function onModal(target) {
  const liModal = target.closest("[data-task-id]");

  const divModal = createModal();
  document.body.appendChild(divModal);

  divModal.addEventListener("click", onDeleteHandler);

  /**
   * function onDeleteHandler Delete or return
   * @param {Object}
   */

  function onDeleteHandler({ target }) {
    if (target.classList.contains("btn-delete-task")) {
      const attrIdOfTask = liModal.dataset.taskId;
      delete objOfTasks[attrIdOfTask];
      localStorage.removeItem(attrIdOfTask);
      liModal.remove();
      divModal.remove();
    } else {
      divModal.remove();
    }
  }
}
