/**
 *Function showError. Add error message incide span
 *
 * @param {HTMLInputElement} input
 * @param {String} msg
 */
export function setShowError(input, msg) {
  const formControl = input.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = msg;

  formControl.className = "form-control js-error";
}

/**
 *Function setSuccessFor. Add success
 * @param {HTMLInputElement} input
 */
export function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control js-success";
}
