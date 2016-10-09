/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:34
* @CopyRight			飞道科技
*/
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
export default function mapToArray<K, V>(map: Map<K, V>) {
	let index = -1;
	const result: [K, V][] = Array(map.size);

	map.forEach(function (value, key) {
		result[++index] = [key, value];
	});
	return result;
}
