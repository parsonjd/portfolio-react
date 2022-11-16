export function validateEmail(email) {
  var result = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return result.test(String(email).toLowerCase());
}
