/**
 * Function getObjectOfTasks. Takes an array of objects and returns an object
 *
 * @param {Array} arrOfTasks
 * @returns {Object} objectOfTasks
 */
export function getObjectOfTasks(arrOfTasks) {
  const tasksFromStorage = localStorage.getItem("tasks");
  const objOfTasks = JSON.parse(tasksFromStorage);

  const isEmpty = isEmptyObject(objOfTasks);

  if (!isEmpty) {
    return objOfTasks;
  }

  const objectOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  return objectOfTasks;
}

function isEmptyObject(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
