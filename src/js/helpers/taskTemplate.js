/**
 * Function listItemTemplate. create template
 * @param {object} objOfTasks
 * @param {string} objOfTasks._id
 * @param {string} objOfTasks.title
 * @param {string} objOfTasks.body
 * @param {Boolean} complited
 *
 * @return {HTMLLIElement} li
 */

export function listItemTemplate({ _id, title, complited, body }) {
  const li = document.createElement("li");
  const id = `f${Math.floor(Math.random() * 1000)}`;
  li.id = id;
  li.className = "task-item";
  li.setAttribute("data-task-id", _id);
  li.setAttribute("draggable", true);

  const h2 = document.createElement("h2");
  h2.className = "task-title";
  h2.textContent = title;

  const p = document.createElement("p");
  p.className = "task-body";
  p.textContent = body;

  const btnDel = document.createElement("button");
  btnDel.className = "task-delete-btn";
  btnDel.textContent = "Delete";

  li.appendChild(h2);
  li.appendChild(p);
  li.appendChild(btnDel);

  return li;
}
