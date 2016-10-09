/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:22
* @CopyRight			飞道科技
*/
import createPadding from './_createPadding';
import stringSize from './_stringSize';
import toInteger from './toInteger';
import toString from './toString';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeFloor = Math.floor;

/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.pad('abc', 8);
 * // => '  abc   '
 *
 * _.pad('abc', 8, '_-');
 * // => '_-abc_-_'
 *
 * _.pad('abc', 3);
 * // => 'abc'
 */
export default function pad(str: string, length: number, chars: string) {
	str = toString(str);
	length = toInteger(length);

	var strLength = length ? stringSize(str) : 0;
	if (!length || strLength >= length) {
		return str;
	}
	var mid = (length - strLength) / 2;
	return (
		createPadding(nativeFloor(mid), chars) +
		str +
		createPadding(nativeCeil(mid), chars)
	);
}
