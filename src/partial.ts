const slice = Array.prototype.slice;
/**
 * Returns a function which invokes the given function with the given arguments prepended to its argument list.
 * Like `Function.prototype.bind`, but does not alter execution context.
 *
 * @param targetFunction The function that needs to be bound
 * @param suppliedArgs An optional array of arguments to prepend to the `targetFunction` arguments list
 * @return The bound function
 */
export default function partial(targetFunction: (...args: any[]) => any, ...suppliedArgs: any[]): (...args: any[]) => any {
	return function (_this: any) {
		const args: any[] = arguments.length ? suppliedArgs.concat(slice.call(arguments)) : suppliedArgs;

		return targetFunction.apply(_this, args);
	};
}
