/*
* @Author:        taoqf
* @Date:        2016-06-17 15:47:20
* @Last Modified by:  taoqf
* @Last Modified time:  2016-06-17 15:47:20
* @CopyRight      飞道科技
*/

import isArguments from './isArguments';
import isArray from './isArray';

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
	return isArray(value) || isArguments(value);
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
export default function baseFlatten(array: any[], depth: number, predicate?: (value: any) => boolean, isStrict = false) {
	var index = -1,
		length = array.length;
	predicate || (predicate = isFlattenable);

	let result = [];

	while (++index < length) {
		var value = array[index];
		if (depth > 0 && predicate(value)) {
			result = result.concat(depth > 1 ? baseFlatten(value, depth - 1, predicate, isStrict) : value);
		} else if (!isStrict) {
			result[result.length] = value;
		}
	}
	return result;
}
