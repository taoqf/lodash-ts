/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:33
* @CopyRight			飞道科技
*/
import toInteger from './toInteger';
import toString from './toString';

/* Built-in method references for those with the same name as other `lodash` methods. */
const nativeMin = Math.min;

/**
 * Creates a function like `_.round`.
 *
 * @private
 * @param {string} methodName The name of the `Math` method to use when rounding.
 * @returns {Function} Returns the new round function.
 */
export default function createRound(func: (num: number | string) => number) {
	return function (num: number, precision) {
		precision = nativeMin(toInteger(precision), 292);
		if (precision) {
			// Shift with exponential notation to avoid floating-point issues.
			// See [MDN](https://mdn.io/round#Examples) for more details.
			let pair = (toString(num) + 'e').split('e'),
				value = func(pair[0] + 'e' + (+pair[1] + precision));

			pair = (toString(value) + 'e').split('e');
			return +(pair[0] + 'e' + (+pair[1] - precision));
		}
		return func(num);
	};
}
