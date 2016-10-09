/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:51
* @CopyRight			飞道科技
*/
import deburr from './deburr';
import words from './words';

/** Used to compose unicode capture groups. */
const rsApos = "['\u2019]";

/** Used to match apostrophes. */
const reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */

export default function createCompounder(callback: (previousValue: string, currentValue: string, currentIndex: number, array?: string[]) => string) {
	return function (str: string): string {
		return words(deburr(str).replace(reApos, '')).reduce(callback, '');
	};
}
