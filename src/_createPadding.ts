/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:50
* @CopyRight			飞道科技
*/
import baseToString from './_baseToString';
import castSlice from './_castSlice';
import reHasComplexSymbol from './_reHasComplexSymbol';
import stringSize from './_stringSize';
import stringToArray from './_stringToArray';

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeCeil = Math.ceil;
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor;

/**
 * The base implementation of `_.repeat` which doesn't coerce arguments.
 *
 * @private
 * @param {string} string The string to repeat.
 * @param {number} n The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 */
function baseRepeat(str: string, n: number) {
	var result = '';
	if (!str || n < 1 || n > MAX_SAFE_INTEGER) {
		return result;
	}
	// Leverage the exponentiation by squaring algorithm for a faster repeat.
	// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	do {
		if (n % 2) {
			result += str;
		}
		n = nativeFloor(n / 2);
		if (n) {
			str += str;
		}
	} while (n);

	return result;
}
/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */
export default function createPadding(length: number, chars) {
	chars = chars === undefined ? ' ' : baseToString(chars);

	const charsLength = chars.length;
	if (charsLength < 2) {
		return charsLength ? baseRepeat(chars, length) : chars;
	}
	const result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
	return reHasComplexSymbol.test(chars)
		? castSlice(stringToArray(result), 0, length).join('')
		: result.slice(0, length);
}
