/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:45
* @CopyRight			飞道科技
*/
import isArguments from './isArguments';
import isArray from './isArray';
import isLength from './isLength';
import isString from './isString';

/**
 * Creates an array of index keys for `object` values of arrays,
 * `arguments` objects, and strings, otherwise `null` is returned.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array|null} Returns index keys, else `null`.
 */
function indexKeys(object: any) {
	const len: number = object ? object.length : undefined;
	if (isLength(len) &&
		(isArray(object) || isString(object) || isArguments(object))) {
		let index = -1;
		const result: string[] = Array(len);

		while (++index < len) {
			result[index] = String(index);
		}
		return result;
	}
	return null;
}

export default indexKeys;
