/*
* @Author:				taoqf
* @Date:				2016-06-17 15:47:25
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:34
* @CopyRight			飞道科技
*/
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @type {Function}
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
export default Array.isArray;
