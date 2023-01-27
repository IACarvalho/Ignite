const buf = Buffer.from("hello")

console.log(buf) // <Buffer 68 65 6c 6c 6f>
console.log(buf.toJSON()) // { type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] }