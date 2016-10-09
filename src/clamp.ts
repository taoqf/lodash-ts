/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:48
* @CopyRight			飞道科技
*/

/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */

export default function clamp(number: number, lower: number, upper: number) {
	if (number === number) {
		if (upper !== undefined) {
			number = number <= upper ? number : upper;
		}
		if (lower !== undefined) {
			number = number >= lower ? number : lower;
		}
	}
	return number;
}

