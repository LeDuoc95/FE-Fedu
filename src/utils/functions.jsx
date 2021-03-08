/* eslint-disable import/no-anonymous-default-export */
const isJson = (value) => {
  try {
    JSON.parse(value);
  } catch (e) {
    return false;
  }
  return true;
};

const isObject = (value) => {
  return typeof value === typeof {};
};

function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function isTextEqual(string, word) {
  return (
    string.replace(/\s+/g, "").toLowerCase() ===
    word.replace(/\s+/g, "").toLowerCase()
  );
}

function debounceDefine(func, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default { isJson, isObject, decodeHtml, isTextEqual, debounceDefine };
