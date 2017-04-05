/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-04-05 18:22:06
* @CopyRight			飞道科技
*/
import isArray from './isArray';
import stringToPath from './_stringToPath';

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
export default function castPath(value: string | string[]) {
	return isArray(value) ? value : stringToPath(value as string);
}
