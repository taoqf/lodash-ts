/*
* @Author:				taoqf
* @Date:				2016-06-17 15:47:20
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:42
* @CopyRight			飞道科技
*/
import castPath from './_castPath';
import isKey from './_isKey';
import toKey from './_toKey';

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
export default function baseGet(obj: any, path: string | string[]) {
	const arr_path = isKey(path, obj) ? [path as string] : castPath(path);

	let index = 0;
	const length = arr_path.length;

	while (obj != null && index < length) {
		obj = obj[toKey(arr_path[index++])];
	}
	return (index && index == length) ? obj : undefined;
}
