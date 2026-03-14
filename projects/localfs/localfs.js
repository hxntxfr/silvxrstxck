class LFS {
	#data = [];
	size() { return this.#data.length; }
	storage() { return [...this.#data]; }
	memory() { return new TextEncoder().encode(JSON.stringify(this.#data)).byteLength; }
	get(name) { return this.#data.find(item => item.name === name)?.data; }
	create(name, data) { return this.#data.push({ name: name, data: data }); }
	remove(name) { this.#data = this.#data.filter((item) => item.name !== name); }
}