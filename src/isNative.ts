/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:29
* @CopyRight			飞道科技
*/
import baseIsNative from './_baseIsNative';

import coreJsData from './_coreJsData';
import isFunction from './isFunction';
import stubFalse from './stubFalse';

/**
 * Checks if `func` is capable of being masked.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
 */
const isMaskable = coreJsData ? isFunction : stubFalse;

/**
 * Checks if `value` is a pristine native function.
 *
 * **Note:** This method can't reliably detect native functions in the
 * presence of the `core-js` package because `core-js` circumvents this kind
 * of detection. Despite multiple requests, the `core-js` maintainer has made
 * it clear: any attempt to fix the detection will be obstructed. As a result,
 * we're left with little choice but to throw an error. Unfortunately, this
 * also affects packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
 * which rely on `core-js`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
export default function isNative(value) {
	if (isMaskable(value)) {
		throw new Error('This method is not supported with `core-js`. Try https://github.com/es-shims.');
	}
	return baseIsNative(value);
}
