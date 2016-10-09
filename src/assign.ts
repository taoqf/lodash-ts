import _mixin from './_mixin';

interface ObjectAssignConstructor extends ObjectConstructor {
	// assign<T extends {}, U extends {}>(target: T, ...sources: (U | null | undefined)[]): T&U;
	assign<T extends {}, U extends {}>(target: T, ...sources: U[]): T & U;
}

export const assign = !!Object.assign ?
	(<ObjectAssignConstructor>Object).assign :
	// function<T extends {}, U extends {}> (target: T, ...sources: (U | null | undefined)[]): T&U {
	function <T extends {}, U extends {}>(target: T, ...sources: U[]): T & U {
		return _mixin({
			deep: false,
			inherited: false,
			sources: sources,
			target: target
		});
	};
export default assign;