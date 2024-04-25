// EMAILS
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateSchoolEmail = (email) => {
  if ( String(email)
  .toLowerCase()
  .match(/^[a-zA-Z0-9._%+-]+@schoolbase\.edu$/) ) {
    return true
  } else {
    return false
  }
};

// USERNAME
export const validateUsername = (username) => {
  if ( String(username).length > 5 ) {
    return true
  } else {
    return false
  }
};

// INPUT
export const validateInput = (input) => {
  if ( String(input).length > 1 ) {
    return true
  } else {
    return false
  }
};

export const validatePassword = (input) => {
  const passwordRegex = /^(?=.*[!@#$%^&*()_+{}|:"<>?])(?=.*[A-Z])(?=.*[0-9])\S{8,}$/
  if ( String(input).match(passwordRegex) ) {
    return true
  } else {
    return false
  }
};

export const validateConfirmPassword = (input) => {
  const passwordRegex = /^(?=.*[!@#$%^&*()_+{}|:"<>?])(?=.*[A-Z])(?=.*[0-9])\S{8,}$/
  if ( String(input).match(passwordRegex) ) {
    return true
  } else {
    return false
  }
};