import { COOKIES } from "./constants";

const setLocalStorage = (key, val) => {
  localStorage.setItem(key, val);
};

const getLocalStorage = key => {
  return localStorage.getItem(key);
};

const delLocalStorage = key => {
  localStorage.removeItem(key);
};

/** ID 관련 **/
export const saveCookieId = id => {
  setLocalStorage(COOKIES.ID, id);
};

export const getCookieId = () => {
  return getLocalStorage(COOKIES.ID);
};

export const delCookieId = () => {
  delLocalStorage(COOKIES.ID);
};

/** TOKEN 관련 **/
export const saveCookieToken = token => {
  setLocalStorage(COOKIES.TOKEN, token);
};

export const getCookieToken = () => {
  return getLocalStorage(COOKIES.TOKEN);
};

export const delCookieToken = () => {
  delLocalStorage(COOKIES.TOKEN);
};
