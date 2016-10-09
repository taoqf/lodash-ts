/*
* @Author:				taoqf
* @Date:				2016-06-17 15:47:25
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:48
* @CopyRight			飞道科技
*/
/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['fred', 30], ['barney', 40]]);
 * // => { 'fred': 30, 'barney': 40 }
 */
export default function fromPairs(pairs: [string, any][]) {
	let index = -1;
	const length = pairs ? pairs.length : 0;
	let result: { [name: string]: any } = {};

	while (++index < length) {
		var pair = pairs[index];
		result[pair[0]] = pair[1];
	}
	return result;
}
