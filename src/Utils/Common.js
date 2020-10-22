// set the token and user from the session storage
export const setUserSession = (token) => {
  localStorage.setItem('token', token);
}