/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:22
* @CopyRight			飞道科技
*/
import isArrayLikeObject from './isArrayLikeObject';

/** `Object#toString` result references. */
const argsTag = '[object Arguments]';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
const objectToString = objectProto.toString;

/** Built-in value references. */
const propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
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
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
export default function isArguments(value: any) {
	// Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
		(!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
