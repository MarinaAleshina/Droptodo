/**
 * Function createNewTask. Created new task
 *
 * @param {HTMLLiElement} title
 * @param {HTMLLiElement} body
 * @param {Boolean} complited
 * @param {Object} objOfTasks
 * @returns {Object} newTask
 */

export function createNewTask(title, body, objOfTasks) {
  const nextTaskId = getNextTaskId(objOfTasks);

  const newTask = {
    _id: nextTaskId,
    title,
    complited: false,
    body
  };

  return newTask;
}

/**

 * Function getNextTaskId. Generates the next id
 * 
 * @param {Array} tasks 
 * @returns {number} next id
 */
function getNextTaskId(tasks) {
  let lastId = Object.keys(tasks)
    .map(elem => +elem.slice(elem.indexOf("-") + 1))
    .sort((a, b) => a - b)
    .pop();
  let nextId = ++lastId;

  return `task-${nextId}`;
}
