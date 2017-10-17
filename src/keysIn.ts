/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-10-17 13:50:45
* @CopyRight			飞道科技
*/
import indexKeys from './_indexKeys';
import isIndex from './_isIndex';
import isPrototype from './_isPrototype';
import iteratorToArray from './_iteratorToArray';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
const enumerate = Reflect ? Reflect.enumerate : undefined,
	propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * The base implementation of `_.keysIn` which doesn't skip the constructor
 * property of prototypes or treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */

let baseKeysIn: (object: any) => any[];


// Fallback for IE < 9 with es6-shim.
if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
	baseKeysIn = function (object) {
		return iteratorToArray(enumerate(object));
	};
} else {
	baseKeysIn = function (object) {
		object = object == null ? object : Object(object);
		var result = [];
		for (var key in object) {
			result.push(key);
		}
		return result;
	}
}
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
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
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
export default function keysIn(object: any) {
	let index = -1;
	const isProto = isPrototype(object),
		props = baseKeysIn(object),
		propsLength = props.length,
		indexes = indexKeys(object),
		skipIndexes = !!indexes,
		result: string[] = indexes || [],
		length = result.length;

	while (++index < propsLength) {
		const key = props[index];
		if (!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
			!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
			result.push(key);
		}
	}
	return result;
}
