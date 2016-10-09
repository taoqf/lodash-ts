/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:39
* @CopyRight			飞道科技
*/

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
export default function castSlice(array: any[], start?: number, end?: number) {
	const length = array.length;
	end = end === undefined ? length : end;
	return (!start && end >= length) ? array : array.slice(start, end);
}
