const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var passwordFormat = /^(?=.*\d)(?=.*[a-zA-Z]).{4,8}$/;

const SingnupValidChecker = (userInput) => {
  const { firstname, lastname, email, password, confirmpassword } = userInput;

  const err = {};

  if (!firstname) {
    err.firstname = "Enter valid name";
  }

  if (!lastname) {
    err.lastname = "Enter valid lastname";
  }

  if (!email.match(mailFormat)) {
    err.email = "Enter valid email";
  }

  if (!password) {
    err.password1 = "Enter valid password";
  }
  if (password && !password.match(passwordFormat)) {
    err.password =
      "Too weak!!Should contain one character one digit and length between 4 and 8";
  }
  if (!confirmpassword) {
    err.confirmpassword = "Enter confirm password";
  }
  if (confirmpassword && password !== confirmpassword) {
    err.passwordnotmatch = "Password didn't match";
  }
  console.log(err);
  return err;
};
const LoginValidChecker = (userInput) => {
  const { email, password } = userInput;

  const err = {};
  if (!email.match(mailFormat)) {
    err.email = "Enter valid email";
  }
  if (!password) {
    err.password = "Enter valid password";
  }
  if (password && !password.match(passwordFormat)) {
    err.password =
      "Too weak!!Should contain one character one digit and length between 4 and 8";
  }

  return err;
};
export { LoginValidChecker, SingnupValidChecker };
