import { generateHTML } from "complate-stream";

class PseudoStream {
	constructor() {
		this._buffer = [];
	}

	read() {
		return this._buffer.join("");
	}

	writeln(str) {
		this.write(`${str}\n`);
	}

	write(str) {
		this._buffer.push(str);
	}

	flush() {
		// no-op
	}
}

let stream = new PseudoStream();
createElement.stream = stream; // XXX: hacky way to export

export default function createElement(tag, params, ...children) {
	let streamer = generateHTML(tag, params, ...children);
	streamer(stream);
}
