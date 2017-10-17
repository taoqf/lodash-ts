/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-10-17 12:00:58
* @CopyRight			飞道科技
*/
import isObjectLike from './isObjectLike';
import getTag, { enumTags } from './_getTag';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
export default function isSymbol(value: any) {
	return typeof value == 'symbol' ||
		(isObjectLike(value) && getTag(value) == enumTags.symbolTag);
}
