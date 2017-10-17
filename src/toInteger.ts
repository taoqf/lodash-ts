/*
* @Author:				taoqf
* @Date:				2016-06-17 15:47:33
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-10-17 11:46:43
* @CopyRight			飞道科技
*/
import toFinite from './toFinite';

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
export default function toInteger(value: any) {
	const result = toFinite(value),
		remainder = result % 1;

	return result === result ? (remainder ? result - remainder : result) : 0;
}
