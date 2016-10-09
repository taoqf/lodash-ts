/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:32
* @CopyRight			飞道科技
*/
import toString from './toString';

/** Used to match property names within property paths. */
const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g;

/** Used to match backslashes in property paths. */
const reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
export default function stringToPath(str: string) {
	let result: string[] = [];
	toString(str).replace(rePropName, function (match, number, quote, string) {
		result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
		return '';
	});
	return result;
}
