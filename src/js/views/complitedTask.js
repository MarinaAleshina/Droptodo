import userInterfaceElements from "../config/ui.config";

const { inComplitedTasks } = userInterfaceElements;

/**
 * Function onComplitedTask. Sets an attribute when a button is clicked
 *
 * @param {HTMLElement} target
 */

export function onComplitedTask(target) {
  let attrIsDone = target.dataset.complited;
  const parent = target.parentElement;

  if (attrIsDone === "done") {
    target.setAttribute("data-complited", "unDone");
    target.style.backgroundColor = "#353535";
    target.textContent = "Done";
    parent.classList.remove("js-complited");
  } else {
    target.setAttribute("data-complited", "done");
    target.style.backgroundColor = "#776a6a";
    target.textContent = "UnDone";
    parent.classList.add("js-complited");
  }

  const incomplite = inComplitedTasks.classList.contains(
    "btn-incomplite-tasks"
  );
  console.log(incomplite);

  if (incomplite) {
    console.log(1);
  }
}
