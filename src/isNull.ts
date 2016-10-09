/*
* @Author:				taoqf
* @Date:				2016-06-17 15:47:25
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:52
* @CopyRight			飞道科技
*/
/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
export default function isNull(value) {
	return value === null;
}
