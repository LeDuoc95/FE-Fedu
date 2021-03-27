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

const clearToken = (key) => {
  if (!!key) {
    localStorage.removeItem(key);
    return;
  }
  localStorage.clear();
};

const setToken = (key, value) => {
  return localStorage.setItem(key, value);
};

const getToken = (key) => {
  return localStorage.getItem(key);
};

export default { set, get, clearToken, setToken, getToken };
