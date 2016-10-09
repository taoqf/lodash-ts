/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:31
* @CopyRight			飞道科技
*/
import random from './random';
import isArrayLike from './isArrayLike';
import values from './values';

/**
 * Gets a random element from `collection`.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @returns {*} Returns the random element.
 * @example
 *
 * _.sample([1, 2, 3, 4]);
 * // => 2
 */
export default function sample(collection: any[]) {
	let array: any[] = isArrayLike(collection) ? collection : values(collection),
		length = array.length;

	return length > 0 ? array[random(0, length - 1)] : undefined;
}
