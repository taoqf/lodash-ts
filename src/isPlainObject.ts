/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:53
* @CopyRight			飞道科技
*/
import getPrototype from './_getPrototype';
import isHostObject from './_isHostObject';
import isObjectLike from './isObjectLike';

/** `Object#toString` result references. */
const objectTag = '[object Object]';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
const funcToString = Function.prototype.toString;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
const objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
const objectToString = objectProto.toString;

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object,
 *  else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
export default function isPlainObject(value) {
	if (!isObjectLike(value) ||
		objectToString.call(value) != objectTag || isHostObject(value)) {
		return false;
	}
	var proto = getPrototype(value);
	if (proto === null) {
		return true;
	}
	var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	return (typeof Ctor == 'function' &&
		Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}
