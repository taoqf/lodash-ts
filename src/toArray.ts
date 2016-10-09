/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:25
* @CopyRight			飞道科技
*/
import {copyArray} from './_mixin';
import getTag, {enumTags} from './_getTag';
import isArrayLike from './isArrayLike';
import isString from './isString';
import iteratorToArray from './_iteratorToArray';
import mapToArray from './_mapToArray';
import setToArray from './_setToArray';
import stringToArray from './_stringToArray';
import values from './values';

/** Built-in value references. */
var iteratorSymbol = typeof (iteratorSymbol = Symbol && Symbol.iterator) == 'symbol' ? iteratorSymbol : undefined;

/**
 * @module @feidao/core/lodash/toArray
 * @example
 * import toArray from '@feidao/core/lodash/toArray';
 *
 * toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * toArray(1);
 * // => []
 *
 * toArray(null);
 * // => []
 * @see _.toArray
*/

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
export default function toArray(value): any[] {
	if (!value) {
		return [];
	}
	if (isArrayLike(value)) {
		return isString(value) ? stringToArray(value) : copyArray(value, true);
	}
	if (iteratorSymbol && value[iteratorSymbol]) {
		return iteratorToArray(value[iteratorSymbol]());
	}
	let tag = getTag(value),
		func: any = tag == enumTags.mapTag ? mapToArray : (tag == enumTags.setTag ? setToArray : values);

	return func(value);
}
