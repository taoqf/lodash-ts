/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:54
* @CopyRight			飞道科技
*/
import stubArray from './stubArray';

/** Built-in value references. */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
let getSymbols: (object: any) => symbol[];

// Fallback for IE < 11.
if (!getOwnPropertySymbols) {
	getSymbols = stubArray;
} else {
	getSymbols = function (object) {
		// Coerce `object` to an object to avoid non-object errors in V8.
		// See https://bugs.chromium.org/p/v8/issues/detail?id=3443 for more details.
		return getOwnPropertySymbols(Object(object));
	}
}

export default getSymbols;
