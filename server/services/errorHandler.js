const regValidationError = (err) => {
  const errors = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  };
  console.log(err);
  let errorObj = err["details"][0];
  //   console.log(err["details"][0]);
  errors[errorObj["path"][0]] = errorObj["message"];
  return errors;
};

module.exports = {
  regValidationError,
};
