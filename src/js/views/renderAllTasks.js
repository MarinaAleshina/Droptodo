import { listItemTemplate } from "../helpers/taskTemplate";
import userInterfaceElements from "../config/ui.config";

const { taskContainer } = userInterfaceElements;

/**
 * function renderAllTasks creates a fragment
 *
 * @param {Object} objOfTasks
 */

export function renderAllTasks(objOfTasks) {
  if (!objOfTasks) return;

  const fragment = document.createDocumentFragment();

  Object.values(objOfTasks).forEach(task => {
    const li = listItemTemplate(task);
    fragment.appendChild(li);
  });

  taskContainer.appendChild(fragment);
}
