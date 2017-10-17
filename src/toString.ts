/*
* @Author:				taoqf
* @Date:				2016-06-17 15:47:33
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:50
* @CopyRight			飞道科技
*/
import baseToString from './_baseToString';

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
export default function toString(value: any) {
	return value == null ? '' : baseToString(value);
}
