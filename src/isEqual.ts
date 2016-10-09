/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:47
* @CopyRight			飞道科技
*/
import isObject from './isObject';
import isObjectLike from './isObjectLike';
import isArray from './isArray';
import isHostObject from './_isHostObject';
import isTypedArray from './isTypedArray';
import mapToArray from './_mapToArray';
import setToArray from './_setToArray';
import getTag, {enumTags} from './_getTag';
import keys from './keys';

/** Used to convert symbols to primitives and strings. */
const symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/** Used to compose bitmasks for comparison styles. */
const UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

function equalArrays(array: any, other: any, equalFunc: (object: any, other: any) => boolean) {
	const arrLength = array.length,
		othLength = other.length;

	if (arrLength != othLength) {
		return false;
	}
	// Assume cyclic values are equal.
	var index = -1,
		result = true;

	// Ignore non-index properties.
	while (++index < arrLength) {
		var arrValue = array[index],
			othValue = other[index];

		// Recursively compare arrays (susceptible to call stack limits).
		if (!(
			arrValue === othValue ||
            equalFunc(arrValue, othValue)
        )) {
			result = false;
			break;
		}
	}
	return result;
}


function equalByTag(object: any, other: any, tag: enumTags, equalFunc?: (object: any, other: any) => boolean) {
	switch (tag) {
		case enumTags.dataViewTag:
			if ((object.byteLength != other.byteLength) ||
				(object.byteOffset != other.byteOffset)) {
				return false;
			}
			object = object.buffer;
			other = other.buffer;

		case enumTags.arrayBufferTag:
			if ((object.byteLength != other.byteLength) ||
				!equalFunc(new Uint8Array(object), new Uint8Array(other))) {
				return false;
			}
			return true;

		case enumTags.boolTag:
		case enumTags.dateTag:
			// Coerce dates and booleans to numbers, dates to milliseconds and
			// booleans to `1` or `0` treating invalid dates coerced to `NaN` as
			// not equal.
			return +object == +other;

		case enumTags.errorTag:
			return object.name == other.name && object.message == other.message;

		case enumTags.numberTag:
			// Treat `NaN` vs. `NaN` as equal.
			return (object != +object) ? other != +other : object == +other;

		case enumTags.regexpTag:
		case enumTags.stringTag:
			// Coerce regexes to strings and treat strings, primitives and objects,
			// as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
			// for more details.
			return object == (other + '');

		case enumTags.mapTag:
			if (object.size != other.size) {
				return false;
			}

			// Recursively compare objects (susceptible to call stack limits).
			return equalArrays(mapToArray(object), mapToArray(other), equalFunc);
		case enumTags.setTag:
			if (object.size != other.size) {
				return false;
			}

			// Recursively compare objects (susceptible to call stack limits).
			return equalArrays(setToArray(object), setToArray(other), equalFunc);

		case enumTags.symbolTag:
			if (symbolValueOf) {
				return symbolValueOf.call(object) == symbolValueOf.call(other);
			}
	}
	return false;
}

function equalObjects(object: any, other: any, equalFunc: (object: any, other: any) => boolean) {
	const objProps = keys(object),
		objLength = objProps.length,
		othProps = keys(other),
		othLength = othProps.length;

	if (objLength != othLength) {
		return false;
	}
	let index = objLength;
	while (index--) {
		const key = objProps[index];
		if (!(key in other)) {
			return false;
		}
	}
	// Assume cyclic values are equal.
	while (++index < objLength) {
		const key = objProps[index];
		const objValue = object[key],
			othValue = other[key];

		// Recursively compare objects (susceptible to call stack limits).
		if (!(objValue === othValue || equalFunc(objValue, othValue))) {
			return false;
		}
	}
	return true;
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object: any, other: any, equalFunc: (object: any, other: any) => boolean) {
	var objIsArr = isArray(object),
		othIsArr = isArray(other),
		objTag = enumTags.arrayTag,
		othTag = enumTags.arrayTag;

	if (!objIsArr) {
		objTag = getTag(object);
		objTag = objTag == enumTags.argsTag ? enumTags.objectTag : objTag;
	}
	if (!othIsArr) {
		othTag = getTag(other);
		othTag = othTag == enumTags.argsTag ? enumTags.objectTag : othTag;
	}
	var objIsObj = objTag == enumTags.objectTag && !isHostObject(object),
		othIsObj = othTag == enumTags.objectTag && !isHostObject(other),
		isSameTag = objTag == othTag;

	if (isSameTag && !objIsObj) {
		return (objIsArr || isTypedArray(object))
			? equalArrays(object, other, equalFunc)
			: equalByTag(object, other, objTag, equalFunc);
	}

	if (!isSameTag) {
		return false;
	}
	return equalObjects(object, other, equalFunc);
}

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are **not** supported.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent,
 *  else `false`.
 * @example
 *
 * var object = { 'user': 'fred' };
 * var other = { 'user': 'fred' };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
export default function isEqual(value, other): boolean {
	if (value === other) {
		return true;
	}
	if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
		return value !== value && other !== other;
	}
	return baseIsEqualDeep(value, other, isEqual);
}
