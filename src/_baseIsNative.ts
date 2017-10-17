/*
* @Author:				taoqf
* @Date:				2016-06-17 15:47:25
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-10-17 11:43:47
* @CopyRight			飞道科技
*/
import isFunction from './isFunction';
import isHostObject from './_isHostObject';
import isObject from './isObject';
import toSource from './_toSource';
import coreJsData from './_coreJsData';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
const reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
const funcToString = Function.prototype.toString;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
const reIsNative = RegExp('^' +
	funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
		.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Used to detect methods masquerading as native. */
const maskSrcKey = (function () {
	const uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func: Function) {
	return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
export default function baseIsNative(value: any) {
	if (!isObject(value) || isMasked(value)) {
		return false;
	}
	const pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	return pattern.test(toSource(value));
}
