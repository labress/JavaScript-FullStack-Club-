
const x = "";
// String vazia é considerada false

const y = 0;
// FALSE
console.log(!!y);

const a = null;
const b = undefined;
// FALSE
console.log(!!a);
console.log(!!b);

const list = [];
const object = {};
// LISTA e OBJETO vazios são considerados TRUE
console.log(!![]);
console.log(!!{});

if (list) {
    console.log(list);
}