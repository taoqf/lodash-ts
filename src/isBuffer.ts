/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
 * @Last Modified by: taoqf
 * @Last Modified time: 2017-10-17 11:51:18
* @CopyRight			飞道科技
*/
import root from './_root';
import stubFalse from './stubFalse';

declare const exports: any, module: any;
/** Detect free variable `exports`. */
const freeExports = typeof exports == 'object' && exports;

/** Detect free variable `module`. */
const freeModule = freeExports && typeof module == 'object' && module;

/** Detect the popular CommonJS extension `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
const Buffer = moduleExports ? root.Buffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
const isBuffer = !Buffer ? stubFalse : function (value: any) {
	return value instanceof Buffer;
};

export default isBuffer;
