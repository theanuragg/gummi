export const getToken = () => localStorage.getItem('captain-token');

export const setToken = (token) => {
  if (!token) return false;
  try {
    localStorage.setItem('captain-token', token);
    return true;
  } catch (error) {
    console.error('Error storing token:', error);
    return false;
  }
};

export const removeToken = () => {
  localStorage.removeItem('captain-token');
};

export const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};
