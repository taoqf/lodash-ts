/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:41
* @CopyRight			飞道科技
*/
import baseFlatten from './_baseFlatten';
import get from './get';

/**
 * Creates an array of values corresponding to `paths` of `object`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {...(string|string[])} [paths] The property paths of elements to pick.
 * @returns {Array} Returns the picked values.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 *
 * _.at(object, ['a[0].b.c', 'a[1]']);
 * // => [3, 4]
 */
export default function at(object: any, paths: string[]) {
	paths = baseFlatten(paths, 1);
	let index = -1;
	const isNil = object == null;
	const length = paths.length;
	const result = Array(length);

	while (++index < length) {
		result[index] = isNil ? undefined : get(object, paths[index]);
	}
	return result;
}
