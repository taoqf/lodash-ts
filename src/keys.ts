/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-10-17 13:47:56
* @CopyRight			飞道科技
*/
import baseHas from './_baseHas';
import indexKeys from './_indexKeys';
import isArrayLike from './isArrayLike';
import isIndex from './_isIndex';
import isPrototype from './_isPrototype';
import isMap from './isMap';
import isWeakMap from './isWeakMap';
import isSet from './isSet';
import isWeakSet from './isWeakSet';

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeKeys = Object.keys;

/**
 * The base implementation of `_.keys` which doesn't skip the constructor
 * property of prototypes or treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object: any) {
	return nativeKeys(Object(object));
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
export default function keys(object: any) {
	if (isMap(object)) {
		const keys = [] as string[];
		(object as Map<any, any>).forEach((v, k) => {
			keys.push(k);
		});
		return keys;
	} else if (isSet(object)) {
		const keys = [] as string[];
		(object as Set<any>).forEach((v, k) => {
			keys.push(k);
		});
		return keys;
	} else if (isWeakMap(object) || isWeakSet(object)) {
		console.warn('could not get keys from weakmap or weakwet.')
		return [];
	}
	const isProto = isPrototype(object);
	if (!(isProto || isArrayLike(object))) {
		return baseKeys(object);
	}
	const indexes = indexKeys(object),
		skipIndexes = !!indexes,
		result: string[] = indexes || [],
		length = result.length;

	for (const key in object) {
		if (baseHas(object, key) &&
			!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
			!(isProto && key == 'constructor')) {
			result.push(key);
		}
	}
	return result;
}
