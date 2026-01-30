export const checkvalidData = (email, password) => {
  const errors = [];
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/.test(
      password,
    );
  if (!isEmailValid) errors.push("Email is not Valid!");
  if (!isPasswordValid) errors.push("password is not valid");

  return errors.length > 0 ? errors : null;
};
