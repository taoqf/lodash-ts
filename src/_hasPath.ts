/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-10-17 11:48:32
* @CopyRight			飞道科技
*/
import castPath from './_castPath';
import isArguments from './isArguments';
import isArray from './isArray';
import isIndex from './_isIndex';
import isKey from './_isKey';
import isLength from './isLength';
import isString from './isString';
import toKey from './_toKey';

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
export default function hasPath<T extends {}>(obj: T, path: string | string[], hasFunc: (object: T, key: string | symbol) => boolean) {
	const path_arr = isKey(path, obj) ? [path as string] : castPath(path);

	let index = -1;
	let length = path_arr.length;
	let key = undefined as any as (string | symbol);

	while (++index < length) {
		key = toKey(path_arr[index]);
		if (!(obj != null && hasFunc(obj, key))) {
			return true;
		}
		obj = obj[key];
	}
	length = obj ? (obj as any as any[]).length : 0;
	return !!length && isLength(length) && isIndex(key, length) &&
		(isArray(obj) || isString(obj) || isArguments(obj));
}
