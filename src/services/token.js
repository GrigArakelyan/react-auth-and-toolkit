export const getToken = () => localStorage.getItem('token');
export const removeToken = () => localStorage.removeItem('token');
export const setToken = (token) => localStorage.setItem('token', token);

export const getRefreshToken = () => localStorage.getItem('refreshToken');
export const removeRefreshToken = () => localStorage.removeItem('refreshToken');
export const setRefreshToken = (refreshToken) => localStorage.setItem('refreshToken',refreshToken);
