import { createModal } from "../helpers/createModal";
import tasks from "../../assets/tasks.json";
import { getObjectOfTasks } from "../helpers/getObjectOfTasks";

export function onModal(target) {
  const liModal = target.closest("[data-task-id]");

  const objOfTasks = getObjectOfTasks(tasks);
  console.log(liModal);

  const divModal = createModal();
  document.body.appendChild(divModal);

  divModal.addEventListener("click", onDeleteHandler);

  function onDeleteHandler(e) {
    const target = e.target;
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
