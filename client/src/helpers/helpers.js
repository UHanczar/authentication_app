export const validate = (formProps) => {
  console.log('FP', formProps);
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.passwordConfirm && formProps.passwordConfirm !== formProps.password) {
    errors.password = 'Passwords must match';
  }
  
  return errors;
};
