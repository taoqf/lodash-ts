/*
* @Author:				taoqf
* @Date:				2016-06-15 11:59:02
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:26
* @CopyRight			飞道科技
*/

import _mixin from './_mixin';

/**
 * @module lodash-ts/clone
 * @example
 * import clone from 'lodash-ts/clone';
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 * @see _.clone
*/

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
export default function clone<T>(value: T, isDeep = false): T {
	return _mixin({
		deep: true,
		inherited: false,
		sources: [value],
		target: {}
	});
}
