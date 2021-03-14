/* eslint-disable import/no-anonymous-default-export */
import functions from "utils/functions";

const set = (key, value) => {
  let valueToSave = value;
  if (Array.isArray(value) || typeof value === typeof {}) {
    valueToSave = JSON.stringify(value);
  }
  sessionStorage.setItem(key, valueToSave);
};

const get = (key) => {
  const value = sessionStorage.getItem(key);
  return (functions.isJson(value) && JSON.parse(value)) || value;
};

const clear = (key) => {
  if (!!key) {
    sessionStorage.removeItem(key);
    return;
  }
  sessionStorage.clear();
};

const setToken = (key, value) => {
  return localStorage.setItem(key, value);
};

const getToken = (key) => {
  return localStorage.getItem(key);
};

export default { set, get, clear, setToken, getToken };
