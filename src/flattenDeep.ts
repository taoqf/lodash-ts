/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:51
* @CopyRight			飞道科技
*/
import baseFlatten from './_baseFlatten';

/** Used as references for various `Number` constants. */
const INFINITY = 1 / 0;

/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */
export default function flattenDeep(array: any[]) {
	var length = array ? array.length : 0;
	return length ? baseFlatten(array, INFINITY) : [];
}
