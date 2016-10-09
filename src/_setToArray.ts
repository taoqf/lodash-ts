/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:47
* @CopyRight			飞道科技
*/
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
export default function setToArray<T>(set: Set<T>) {
	let index = -1;
	const result: T[] = Array(set.size);

	set.forEach(function (value) {
		result[++index] = value;
	});
	return result;
}
