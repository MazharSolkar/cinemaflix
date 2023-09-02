const checkValidData = (...userData) => {
  if (userData.length === 3) {
    const [name, email, password] = userData;

    const isNameValid = /^[A-Za-z ]+$/.test(name);

    const isEmailValid =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isNameValid) return 'Name should consist only of letters and spaces.';
    if (!isEmailValid) return 'Email ID is not valid';
    if (!isPasswordValid)
      return 'Password requires: Uppercase, special character, 8+ characters.';
  } else {
    const [email, password] = userData;

    const isEmailValid =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return 'Email ID is not valid';
    if (!isPasswordValid)
      return 'Password requires: Uppercase, special character, 8+ characters.';
  }

  return null;
};

export default checkValidData;
