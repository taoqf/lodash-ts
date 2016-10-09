/*
* @Author:        taoqf
* @Date:        2016-06-17 15:47:20
* @Last Modified by:  taoqf
* @Last Modified time:  2016-06-17 15:47:20
* @CopyRight      飞道科技
*/
import isSymbol from './isSymbol';

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
export default function baseExtremum<T>(array: T[], comparator: (v1: T, v2: T) => boolean) {
	let index = -1;
	const length = array.length;
	let computed: T;
	while (++index < length) {
		const value = array[index];
		if (value != null && (computed === undefined
			? (value === value && !isSymbol(value))
			: comparator(value, computed)
        )) {
			computed = value;
		}
	}
	return computed;
}
