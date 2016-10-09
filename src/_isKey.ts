/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:41
* @CopyRight			飞道科技
*/
import isArray from './isArray';
import isSymbol from './isSymbol';

/** Used to match property names within property paths. */
const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
export default function isKey(value: any, object?) {
	if (isArray(value)) {
		return false;
	}
	var type = typeof value;
	if (type == 'number' || type == 'symbol' || type == 'boolean' ||
		value == null || isSymbol(value)) {
		return true;
	}
	return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
		(object != null && value in Object(object));
}
