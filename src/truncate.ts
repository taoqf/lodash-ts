/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:46
* @CopyRight			飞道科技
*/
import baseToString from './_baseToString';
import castSlice from './_castSlice';
import isObject from './isObject';
import isRegExp from './isRegExp';
import reHasComplexSymbol from './_reHasComplexSymbol';
import stringSize from './_stringSize';
import stringToArray from './_stringToArray';
import toInteger from './toInteger';
import toString from './toString';

/** Used as default options for `_.truncate`. */
const DEFAULT_TRUNC_LENGTH = 30,
    DEFAULT_TRUNC_OMISSION = '...';

/** Used to match `RegExp` flags from their coerced string values. */
const reFlags = /\w*$/;

/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @example
 *
 * _.truncate('hi-diddly-ho there, neighborino');
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * });
 * // => 'hi-diddly-ho there,...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * });
 * // => 'hi-diddly-ho there...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * });
 * // => 'hi-diddly-ho there, neig [...]'
 */
export default function truncate(str: string, separator: string | RegExp, length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION) {
	str = toString(str);
	let strLength = str.length;
	let strSymbols: string[];
	if (reHasComplexSymbol.test(str)) {
		strSymbols = stringToArray(str);
		strLength = strSymbols.length;
	}
	if (length >= strLength) {
		return str;
	}
	let end = length - stringSize(omission);
	if (end < 1) {
		return omission;
	}
	let result: string = strSymbols
		? castSlice(strSymbols, 0, end).join('')
		: str.slice(0, end);

	if (separator === undefined) {
		return result + omission;
	}
	if (strSymbols) {
		end += (result.length - end);
	}
	if (isRegExp(separator)) {
		let separator_reg = separator as RegExp;
		if (str.slice(end).search(separator_reg)) {
			let match: RegExpExecArray,
				substring = result;

			if (!separator_reg.global) {
				separator_reg = RegExp(separator_reg.source, toString(reFlags.exec(separator as string)) + 'g');
			}
			separator_reg.lastIndex = 0;
			let newEnd: number;
			while (match = separator_reg.exec(substring)) {
				newEnd = match.index;
			}
			result = result.slice(0, newEnd === undefined ? end : newEnd);
		}
	} else if (str.indexOf(baseToString(separator), end) != end) {
		const index = result.lastIndexOf(separator as string);
		if (index > -1) {
			result = result.slice(0, index);
		}
	}
	return result + omission;
}
