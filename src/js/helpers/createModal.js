/**
 * function createModal. Create modal window
 * @returns {HTMLLIElement} divModal
 */

export function createModal() {
  const divModal = document.createElement("div");
  divModal.className = "modal-window";

  const divContainer = document.createElement("div");
  divContainer.className = "container";

  const p = document.createElement("p");
  p.innerText = `Do you want to delete this task?`;

  const btnOk = document.createElement("button");
  btnOk.setAttribute("data-is-delete", "delete");
  btnOk.className = "btn btn-delete-task";
  btnOk.textContent = "Ok";

  const btnCancel = document.createElement("button");
  btnCancel.setAttribute("data-is-cancel", "cancel");
  btnCancel.className = "btn cancel-del-task";
  btnCancel.textContent = "Cancel";

  divModal.appendChild(divContainer);
  divContainer.appendChild(p);
  divContainer.appendChild(btnOk);
  divContainer.appendChild(btnCancel);

  return divModal;
}
