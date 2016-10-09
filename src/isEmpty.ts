/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:26
* @CopyRight			飞道科技
*/
import getTag, {enumTags} from './_getTag';
import isArguments from './isArguments';
import isArray from './isArray';
import isArrayLike from './isArrayLike';
import isBuffer from './isBuffer';
import isFunction from './isFunction';
import isObjectLike from './isObjectLike';
import isString from './isString';
import keys from './keys';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
const propertyIsEnumerable = objectProto.propertyIsEnumerable;

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
const nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
export default function isEmpty(value) {
	if (isArrayLike(value) &&
		(isArray(value) || isString(value) || isFunction(value.splice) ||
			isArguments(value) || isBuffer(value))) {
		return !value.length;
	}
	if (isObjectLike(value)) {
		var tag = getTag(value);
		if (tag == enumTags.mapTag || tag == enumTags.setTag) {
			return !value.size;
		}
	}
	for (var key in value) {
		if (hasOwnProperty.call(value, key)) {
			return false;
		}
	}
	return !(nonEnumShadows && keys(value).length);
}
