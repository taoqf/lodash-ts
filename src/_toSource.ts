/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:53
* @CopyRight			飞道科技
*/
/** Used to resolve the decompiled source of functions. */
const funcToString = Function.prototype.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
export default function toSource(func: Function) {
	if (func != null) {
		try {
			return funcToString.call(func);
		} catch (e) { }
		try {
			return (func + '');
		} catch (e) { }
	}
	return '';
}
