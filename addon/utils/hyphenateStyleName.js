const uppercasePattern = /[A-Z]/g;
const msPattern = /^ms-/;
const cache = {};

export default string =>
  string in cache
    ? cache[string]
    : (cache[string] = string
        .replace(uppercasePattern, '-$&')
        .toLowerCase()
        .replace(msPattern, '-ms-'));
