
export default function removeDups<T>(arr: T[]) {
	return arr.filter((it, idx) => {
		return arr.indexOf(it, ++idx) == -1;
	});
}
