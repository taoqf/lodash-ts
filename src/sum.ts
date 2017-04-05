/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-04-05 18:22:59
* @CopyRight			飞道科技
*/

/**
 * Computes the sum of the values in `array`.
 *
 * @static
 * @memberOf _
 * @since 3.4.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {number} Returns the sum.
 * @example
 *
 * _.sum([4, 2, 8, 6]);
 * // => 20
 */
export default function sum(array: number[]) {
	return array.reduce((previousValue, currentValue, currentIndex, array) => {
		return previousValue + currentValue;
	}, 0);
}
