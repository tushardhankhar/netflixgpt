export function validateCredentials({email, password}) {
    const errors = {};
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }
  
    const passwordMinLength = 8;
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < passwordMinLength) {
      errors.password = `Password must be at least ${passwordMinLength} characters long`;
    } else if (!/\d/.test(password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/[a-zA-Z]/.test(password)) {
      errors.password = "Password must contain at least one letter";
    }
  
    return errors;
  }
  