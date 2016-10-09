/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:48
* @CopyRight			飞道科技
*/

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to search.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
export default function arrayIncludes<T>(array: T[], value: T) {
	var length = array ? array.length : 0;
	return !!length && array.indexOf(value, 0) > -1;
}
