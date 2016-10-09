/*
* @Author:				taoqf
* @Date:				2016-06-17 15:47:25
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:43
* @CopyRight			飞道科技
*/
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
export default function isObject(value: any) {
	let type = typeof value;
	return !!value && (type == 'object' || type == 'function');
}
