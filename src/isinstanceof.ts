import isFunction from './isFunction';

export default function instanceOf(obj: any, clazz: any) {
	if (isFunction(clazz)) {
		return obj instanceof clazz;
	} else {
		return false;
	}
}