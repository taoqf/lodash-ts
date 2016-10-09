/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:31
* @CopyRight			飞道科技
*/
import isArray from './isArray';
import isObjectLike from './isObjectLike';

/** `Object#toString` result references. */
const stringTag = '[object String]';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
const objectToString = objectProto.toString;

/**
 * @module @feidao/core/lodash/isString
 * @example
 * import isString from '@feidao/core/lodash/isString';
 *
 * isString('abc');
 * // => true
 *
 * isString(1);
 * // => false
 * @see _.isString
*/

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
export default function isString(value) {
	return typeof value == 'string' ||
		(!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}
