/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:30
* @CopyRight			飞道科技
*/
// import Map from './_Map';
// import Promise from './_Promise';
// import Set from './_Set';
import toSource from './_toSource';

export enum enumTags {
	mapTag,
	objectTag,
	promiseTag,
	setTag,
	weakMapTag,
	dataViewTag,

	argsTag,
	arrayTag,
	boolTag,
	dateTag,
	errorTag,
	funcTag,
	genTag,
	numberTag,
	regexpTag,
	stringTag,
	symbolTag,

	arrayBufferTag,
	float32Tag,
	float64Tag,
	int8Tag,
	int16Tag,
	int32Tag,
	uint8Tag,
	uint8ClampedTag,
	uint16Tag,
	uint32Tag,
}

const tags = {
	'[object Map]': enumTags.mapTag,
	'[object Object]': enumTags.objectTag,
	'[object Promise]': enumTags.promiseTag,
	'[object Set]': enumTags.setTag,
	'[object WeakMap]': enumTags.weakMapTag,
	'[object DataView]': enumTags.dataViewTag,

	'[object Arguments]': enumTags.argsTag,
	'[object Array]': enumTags.arrayTag,
	'[object Boolean]': enumTags.boolTag,
	'[object Date]': enumTags.dateTag,
	'[object Error]': enumTags.errorTag,
	'[object Function]': enumTags.funcTag,
	'[object GeneratorFunction]': enumTags.genTag,
	'[object Number]': enumTags.numberTag,
	'[object RegExp]': enumTags.regexpTag,
	'[object String]': enumTags.stringTag,
	'[object Symbol]': enumTags.symbolTag,

	'[object ArrayBuffer]': enumTags.arrayBufferTag,
	'[object Float32Array]': enumTags.float32Tag,
	'[object Float64Array]': enumTags.float64Tag,
	'[object Int8Array]': enumTags.int8Tag,
	'[object Int16Array]': enumTags.int16Tag,
	'[object Int32Array]': enumTags.int32Tag,
	'[object Uint8Array]': enumTags.uint8Tag,
	'[object Uint8ClampedArray]': enumTags.uint8ClampedTag,
	'[object Uint16Array]': enumTags.uint16Tag,
	'[object Uint32Array]': enumTags.uint32Tag,
};

export function str2tag(tag: string) {
	return tags[tag] as enumTags;
}

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
const objectToString = Object.prototype.toString;

/** Used to detect maps, sets, and weakmaps. */
const dataViewCtorString = toSource(DataView),
	mapCtorString = toSource(Map),
	promiseCtorString = toSource(Promise),
	setCtorString = toSource(Set),
	weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

function _get_tag(value: any) {
	return str2tag(objectToString.call(value));
}

let getTag = function (value: any) {
	return _get_tag(value);
}
// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != enumTags.dataViewTag) ||
	(Map && getTag(new Map) != enumTags.mapTag) ||
	(Promise && getTag(Promise.resolve()) != enumTags.promiseTag) ||
	(Set && getTag(new Set) != enumTags.setTag) ||
	(WeakMap && getTag(new WeakMap) != enumTags.weakMapTag)) {
	getTag = function (value) {
		let result = _get_tag(value),
			Ctor = result == enumTags.objectTag ? value.constructor : undefined,
			ctorString = Ctor ? toSource(Ctor) : undefined;

		if (ctorString) {
			switch (ctorString) {
				case dataViewCtorString: return enumTags.dataViewTag;
				case mapCtorString: return enumTags.mapTag;
				case promiseCtorString: return enumTags.promiseTag;
				case setCtorString: return enumTags.setTag;
				case weakMapCtorString: return enumTags.weakMapTag;
			}
		}
		return result;
	};
}

export default getTag;
