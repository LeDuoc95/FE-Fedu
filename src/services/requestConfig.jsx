/* eslint-disable no-useless-concat */
/* eslint-disable import/no-anonymous-default-export */
import session from "utils/session";

const API_URL = process.env.REACT_APP_HOST;
const STORE_KEY = process.env.STORE_KEY;

const getHeader = (contentType = "json", token = "dfsdf") => ({
  Accept: "application/json",
  "Content-Type": `application/` + `${contentType}`,
  Authorization: `Bearer ${token}`,
});

const getUrl = (apiKey) => API_URL + apiKey;

const getRequestInit = (contentType, token, method) => ({
  method,
  headers: getHeader(contentType, token),
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin",
  body: null,
});

const fetchGet = async (contentType, token, api, messErr = null) => {
  try {
    const requestInit = getRequestInit(contentType, token, "GET");
    const response = await fetch(getUrl(api), requestInit);

    if (response.status === 403) {
      throw Error("invalidToken");
    }

    if (response.status === 200 || response.status === 500) {
      return await response.json();
    }

    if (messErr) {
      throw Error(messErr);
    }
  } catch (error) {
    throw error;
  }
};

const fetchPost = async (contentType, token, api, body, messErr = null) => {
  try {
    const requestInit = getRequestInit(contentType, token, "POST");
    let urlencoded;

    if (!!body && contentType !== "x-www-form-urlencoded") {
      requestInit.body = JSON.stringify(body);
    }

    if (!!body && contentType === "x-www-form-urlencoded") {
      urlencoded = new URLSearchParams();
      for (const [key, value] of Object.entries(body)) {
        urlencoded.append(key, value);
      }
      requestInit.body = urlencoded;
    }

    const response = await fetch(getUrl(api), requestInit);

    if (response.status === 401 || response.status === 500) {
      throw Error(response.statusText);
    }

    if (response.status === 200) {
      return await response.json();
    }

    if (messErr) {
      throw Error(messErr);
    }
  } catch (error) {
    throw error;
  }
};

const fetchPut = async (contentType, token, api, body, messErr = null) => {
  try {
    const requestInit = getRequestInit(contentType, token, "PUT");
    let urlencoded;

    if (!!body && contentType !== "x-www-form-urlencoded") {
      requestInit.body = JSON.stringify(body);
    }

    if (!!body && contentType === "x-www-form-urlencoded") {
      urlencoded = new URLSearchParams();
      for (const [key, value] of Object.entries(body)) {
        urlencoded.append(key, value);
      }
      requestInit.body = urlencoded;
    }

    const response = await fetch(getUrl(api), requestInit);

    if (response.status === 403) {
      throw Error("invalidToken");
    }

    if (response.status === 200 || response.status === 500) {
      return await response.json();
    }

    if (messErr) {
      throw Error(messErr);
    }
  } catch (error) {
    throw error;
  }
};

const fetchDelete = async (contentType, token, api, body, messErr = null) => {
  try {
    const requestInit = getRequestInit(contentType, token, "DELETE");
    const response = await fetch(getUrl(api), requestInit);
    let urlencoded;

    if (!!body && contentType !== "x-www-form-urlencoded") {
      requestInit.body = JSON.stringify(body);
    }

    if (!!body && contentType === "x-www-form-urlencoded") {
      urlencoded = new URLSearchParams();
      for (const [key, value] of Object.entries(body)) {
        urlencoded.append(key, value);
      }
      requestInit.body = urlencoded;
    }
    if (response.status === 403) {
      throw Error("invalidToken");
    }

    if (response.status === 200) {
      return await response.json();
    }

    if (messErr) {
      throw Error(messErr);
    }
  } catch (error) {
    throw error;
  }
};

export default {
  fetchGet,
  fetchPost,
  fetchPut,
  fetchDelete,
};
