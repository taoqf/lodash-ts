/*
* @Author:        taoqf
* @Date:        2016-06-17 15:47:20
* @Last Modified by:  taoqf
* @Last Modified time:  2016-06-17 15:47:20
* @CopyRight      飞道科技
*/
import arrayIncludes from './_arrayIncludes';

/** Used as the size to enable large array optimizations. */
const LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
export default function baseDifference<T>(array: T[], values: T[]) {
	let index = -1;
	let isCommon = true;
	const length = array && array.length;
	let result: T[] = [];
	const valuesLength = values.length;
	const vs = new Set<T>(values);

	if (!length) {
		return result;
	}
	else if (values.length >= LARGE_ARRAY_SIZE) {
		isCommon = false;
	}
	outer:
	while (++index < length) {
		const value = array[index];
		if (isCommon) {
			if (isCommon && value === value) {
				let valuesIndex = valuesLength;
				while (valuesIndex--) {
					if (values[valuesIndex] === value) {
						continue outer;
					}
				}
				result.push(value);
			} else if (!arrayIncludes(values, value)) {
				result.push(value);
			}
		}
		else if (!vs.has(value)) {
			result.push(value);
		}
	}
	return result;
}