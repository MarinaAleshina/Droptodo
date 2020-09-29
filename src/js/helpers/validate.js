const regExpProp = {
  title: /^[a-z0-9 -]{3,}$/i,
  body: /^[a-z0-9 -\/_*+=.,!?]{5,}$/i
};

/**
 *Function validate.
 * @param {HTMLInputElement} input
 * @returns {Boolean} return true if input the form is valid
 */

export function validate(input) {
  const inputAttr = input.dataset.required;
  if (!inputAttr) return true;

  const isValueInput = regExpProp[inputAttr].test(input.value);

  return isValueInput;
}
