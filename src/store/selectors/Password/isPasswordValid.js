export const isPasswordValidToDisplay = (state) => {
  const uppercaseRegex = /^(?=.*?[A-Z])/;
  const lowercaseRegex = /^(?=.*?[a-z])/;
  const specialCharRegex = /^(?=.*?[#?!@$%^&*-])/;
  const numberRegex = /^(?=.*?[0-9])/;

  const passwordInput = state.password;

  const validations = [
    uppercaseRegex.test(passwordInput) ? "uppercase" : null,
    lowercaseRegex.test(passwordInput) ? "lowercase" : null,
    specialCharRegex.test(passwordInput) ? "specialChar" : null,
    numberRegex.test(passwordInput) ? "number" : null,
    passwordInput.length >= 8 ? "length" : null,
  ];

  return validations.filter(Boolean);

};

export const isPasswordValid = (state) => {
  const uppercaseRegex = /^(?=.*?[A-Z])/;
  const lowercaseRegex = /^(?=.*?[a-z])/;
  const specialCharRegex = /^(?=.*?[#?!@$%^&*-])/;
  const numberRegex = /^(?=.*?[0-9])/;

  const passwordInput = state.password;

  const isUppercaseValid = uppercaseRegex.test(passwordInput);
  const isLowercaseValid = lowercaseRegex.test(passwordInput);
  const isSpecialCharValid = specialCharRegex.test(passwordInput);
  const isNumberValid = numberRegex.test(passwordInput);

  return (
    isUppercaseValid &&
    isLowercaseValid &&
    isSpecialCharValid &&
    isNumberValid &&
    passwordInput.length >= 8
  );
};
