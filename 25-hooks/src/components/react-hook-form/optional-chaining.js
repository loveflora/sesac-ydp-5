//=== optional Chaining ===

const user = {};
const user2 = { name: 'Sarah' };

console.log(user); // {}
console.log(user && user.name); // undefined

console.log(user?.name); // undefined
console.log(user2?.name); // Sarah

// https://ko.javascript.info/optional-chaining
