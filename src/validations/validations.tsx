export const validatePassword = (password: string): boolean => {
  const findDigitRegex = /[0-9.,]/;
  const findLetterRegex = /[A-z.,]|[a-z.,]/;

  if (password.length == 0) {
    alert('Passsword is a required field');
    return false;
  }

  if (password.length < 7) {
    alert('Password must have at least 7 characters');
    return false;
  }

  if (!findDigitRegex.test(password) || !findLetterRegex.test(password)) {
    alert('Password must have at least one digit and one letter');
    return false;
  }
  return true;
};

export const validateEmail = (email: string): boolean => {
  const validEmailRegex = /\S+@\S+\.\S+/;

  if (email.length == 0) {
    alert('Email is a required field');
    return false;
  }

  if (!validEmailRegex.test(email)) {
    alert('Inform a valid email');
    return false;
  }
  return true;
};

export const validateName = (name: string): boolean => {
  const validNameRegex = /[A-Z.,]|[a-z.,]/;

  if (name.length === 0) {
    alert('Name is a required field');
    return false;
  }
  if (!validNameRegex.test(name)) {
    alert('Your name must contain only letters');
    return false;
  }
  return true;
};

export const validatePhone = (phone: string): boolean => {
  const validPhoneRegex = /[0-9.,]/;

  if (phone.length === 0) {
    alert('Phone is a required field');
    return false;
  }
  if (!validPhoneRegex.test(phone)) {
    alert('Phone must be a number');
    return false;
  }
  return true;
};
