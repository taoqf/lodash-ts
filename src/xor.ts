/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:31
* @CopyRight			飞道科技
*/
import baseDifference from './_baseDifference';
import isArrayLikeObject from './isArrayLikeObject';
import uniq from './uniq';

/**
 * Creates an array of unique values that is the
 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
 * of the given arrays. The order of result values is determined by the order
 * they occur in the arrays.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.without
 * @example
 *
 * _.xor([2, 1], [2, 3]);
 * // => [1, 3]
 */

export default function xor<T>(...arrays: T[][]) {
	const arr = arrays.filter(isArrayLikeObject);
	let index = -1;
	const length = arr.length;

	let result: T[] = [];
	while (++index < length) {
		result = baseDifference(result, arr[index]).concat(baseDifference(arr[index], result));
	}
	return uniq(result);
}
