import isFunction from './isFunction';

export default function instanceOf(obj, clazz) {
	if (isFunction(clazz)) {
		return obj instanceof clazz;
	} else {
		return false;
	}
}