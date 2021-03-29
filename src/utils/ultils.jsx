export const sliceText = (numberOfText, text) => {
  let result = text;
  if (text.length > numberOfText) {
    result = text.slice(0, numberOfText) + " ...";
  }
  return result;
};
