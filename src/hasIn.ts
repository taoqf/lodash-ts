/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-10-17 11:59:19
* @CopyRight			飞道科技
*/
import hasPath from './_hasPath';


/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [obj] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(obj: any, key: string | symbol) {
	return obj != null && key in Object(obj);
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
export default function hasIn<T extends {}>(object: T, path: string) {
	return object != null && hasPath(object, path, baseHasIn);
}
