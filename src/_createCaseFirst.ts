/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:25
* @CopyRight			飞道科技
*/
import castSlice from './_castSlice';
import reHasComplexSymbol from './_reHasComplexSymbol';
import stringToArray from './_stringToArray';
import toString from './toString';

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
export default function createCaseFirst(methodName: string) {
	return function (str:string): string {
		str = toString(str);

		const strSymbols = reHasComplexSymbol.test(str)
			? stringToArray(str)
			: undefined;

		const chr = strSymbols
			? strSymbols[0]
			: str.charAt(0);

		const trailing = strSymbols
			? castSlice(strSymbols, 1).join('')
			: str.slice(1);

		return chr[methodName]() + trailing;
	};
}
