export const getToken = () => localStorage.getItem('token');
export const removeToken = () => localStorage.removeItem('token');
export const setToken = (token:string) => localStorage.setItem('token', token);

export const getRefreshToken = () => localStorage.getItem('refreshToken');
export const removeRefreshToken = () => localStorage.removeItem('refreshToken');
export const setRefreshToken = (refreshToken:string) => localStorage.setItem('refreshToken',refreshToken);