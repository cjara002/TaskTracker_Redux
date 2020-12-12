export default function TaskFormValidation(data) {
  const errors = {};
  if(!data.Task) {
    errors.Task = 'Required';
  }
  if(data.Task && data.Task.length < 3) {
    errors.Task = 'Must be longer than 3 characters';
  }
  return errors;
}