import validator from 'validator';

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

function validateRegisterInput(data) {
  const errors = {};

  if (!validator.isLength(data.name, {min: 2, max: 30})) {
    errors.name = 'Name must be between 2 to 30 characters';
  }

  if (validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (validator.isEmpty(data.mobile)) {
    errors.mobile = 'Mobile field is required';
  } else if (!validator.isNumeric(data.mobile)) {
    errors.mobile = 'Mobile number must be numeric';
  }

  if (validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  } else if (!validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must be at least 6 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}

export default validateRegisterInput;
