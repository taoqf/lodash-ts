/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:26
* @CopyRight			飞道科技
*/
import isSymbol from './isSymbol';

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
export default function toKey(value: any): string | symbol {
	if (typeof value == 'string' || isSymbol(value)) {
		return value;
	}
	const result = (value + '');
	return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}
