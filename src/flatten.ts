/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:39
* @CopyRight			飞道科技
*/
import baseFlatten from './_baseFlatten';
import toInteger from './toInteger';

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
export default function flatten(array: any[], depth = 1) {
	const length = array ? array.length : 0;
	if (!length) {
		return [];
	}
	depth = depth === undefined ? 1 : toInteger(depth);
	return baseFlatten(array, depth);
}
