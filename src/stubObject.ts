/*
* @Author:				taoqf
* @Date:				2016-06-17 15:47:33
* @Last Modified by:	taoqf
* @Last Modified time:	2016-06-17 15:54:25
* @CopyRight			飞道科技
*/
/**
 * A method that returns a new empty object.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Object} Returns the new empty object.
 * @example
 *
 * var objects = _.times(2, _.stubObject);
 *
 * console.log(objects);
 * // => [{}, {}]
 *
 * console.log(objects[0] === objects[1]);
 * // => false
 */
export default function stubObject() {
	return {};
}
