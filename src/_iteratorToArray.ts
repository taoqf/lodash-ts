/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:26
* @CopyRight			飞道科技
*/
/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
export default function iteratorToArray<T>(iterator: Iterator<T>) {
	let data: IteratorResult<T>;
	const result: T[] = [];

	while (!(data = iterator.next()).done) {
		result.push(data.value);
	}
	return result;
}
