/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:53
* @CopyRight			飞道科技
*/
import toInteger from './toInteger';

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */
export default function chunk<T>(array: T[], size: number) {
	if (size === undefined) {
		size = 1;
	} else {
		size = nativeMax(toInteger(size), 0);
	}
	const length = array ? array.length : 0;
	if (!length || size < 1) {
		return [];
	}
	let index = 0,
		resIndex = 0;
	const result = Array(nativeCeil(length / size));

	while (index < length) {
		result[resIndex++] = array.slice(index, (index += size));
	}
	return result;
}
