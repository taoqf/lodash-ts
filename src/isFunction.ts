/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-05-11 19:45:41
* @CopyRight			飞道科技
*/
import isObject from './isObject';

/** `Object#toString` result references. */
const funcTag = '[object Function]';
const genTag = '[object GeneratorFunction]';
const asyncTag = '[object AsyncFunction]';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
const objectToString = objectProto.toString;

/**
 * @module lodash-ts/isFunction
 * @example
 * import isFunction from 'lodash-ts/isFunction';
 *
 * isFunction(_);
 * // => true
 *
 * isFunction(/abc/);
 * @see _.isFunction
*/

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
export default function isFunction(value: any) {
	// The use of `Object#toString` avoids issues with the `typeof` operator
	// in Safari 8 which returns 'object' for typed array and weak map constructors,
	// and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	var tag = isObject(value) ? objectToString.call(value) : '';
	return tag === funcTag || tag === genTag || tag === asyncTag;
}
