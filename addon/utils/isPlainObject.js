import baseGetTag from './baseGetTag';
import isObjectLike from './isObjectLike';

function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != '[object Object]') {
    return false;
  }

  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}

export default isPlainObject;
