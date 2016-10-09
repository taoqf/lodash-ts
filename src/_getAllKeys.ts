/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:23
* @CopyRight			飞道科技
*/
import getSymbols from './_getSymbols';
import keys from './keys';
import isArray from './isArray';

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
export default function getAllKeys(object: any) {
	var result = keys(object);
	return isArray(object) ? result : result.concat(getSymbols(object) as any);
}
