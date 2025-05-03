// src/utils/auth.js
export const getToken = () => sessionStorage.getItem("token");
export const getUserRole = () => sessionStorage.getItem("role");
export const isLoggedIn = () => !!getToken();
