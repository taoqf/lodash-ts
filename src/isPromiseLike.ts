import isFunction from './isFunction';

export default function isPromiseLike(obj: any) {
	return obj && isFunction(obj.then);
}
