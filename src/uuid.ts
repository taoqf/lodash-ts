
/**
 * ## 生成一个唯一标识ID
 * @param  {number} [len=36]   长度
 * @param  {number} [salt=62] 随机数
 * @return {string}       生成唯一标识ID
 */
export default function uuid(len?: number, salt?: number): string {
	const CHARS = '0123456789abcdef'.split('');
	let chars = CHARS;
	let uuid = <string[]>[];
	let rnd = Math.random;
	salt = salt || new Date().getTime();
	if (len) {
		for (let i = 0; i < len; i++) {
			uuid[i] = chars[0 | rnd() * salt];
		}
	}
	else {
		uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		uuid[14] = '4';
		for (let i = 0; i < 36; i++) {
			if (!uuid[i]) {
				let r = 0 | rnd() * 16;
				uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r & 0xf];
			}
		}
	}
	return uuid.join('');//.replace(/-/g, '');
}
