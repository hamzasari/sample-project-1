/**
 * Returns true if the given object as parameter is empty, otherwise returns false
 * @param obj
 * @returns {boolean}
 */
export const isObjectEmpty = (obj) => {
  return JSON.stringify(obj) === JSON.stringify({});
};
