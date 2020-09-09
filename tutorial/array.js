//* Array 생성
let arr = new Array(3);
arr[0] = 0;
arr[1] = 1;
console.log(arr);

arr = Array(2).fill(0);
console.log(arr);

arr = Array.from(Array(5), () => Array(3).fill(0));
console.log(arr);

//* array 최대값, 최소값
arr = [0, 77, 33, 11, 99, 88, 55];
console.log(Math.max.apply(null, arr)); // 99
console.log(Math.min.apply(null, arr)); // 0

//* str.split([separator[, limit]])
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.split('')[8]); // "k"
console.log(str.split('', 5)); // [ 'T', 'h', 'e', ' ', 'q' ]
console.log(str.split()); // ["The quick brown fox jumps over the lazy dog."]

//* arr.slice([beginIndex[, endIndexBefore]])
// 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환
// 원본 배열은 바뀌지 않습니다.
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
console.log(animals); // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(animals.slice(2, 4)); // ["camel", "duck"]
console.log(animals.slice(1, 5)); // ["bison", "camel", "duck", "elephant"]

//* arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])
//  배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // index 1에 0개를 지우고 item 추가
console.log(months); // ['Jan','Feb','March', 'April', 'June']
months.splice(4, 1, 'May'); // index 4에 1개 지우고 item 추가
console.log(months); //['Jan','Feb','March', 'April', 'May']

//* arr.join([separator = ',']) : Array 합치기
arr = ['aaa', 'bbb', 'ccc', 'ddd'];
console.log(arr.join());
console.log(arr.join(''));

//* arr.toString() : 지정된 배열 및 그 요소를 나타내는 문자열을 반환
//! Number.toString([radix]) : 숫자를 radix 진수로 표현
console.log(arr.toString());
console.log((21).toString(2));

//* for in : key
const obj = { a: 1, b: 2, c: 3 };
for (const k in obj) {
	console.log(`${k} : ${obj[k]}`);
}

//* for of : value
arr = [1, 2, 3];
for (const v of arr) {
	console.log(v);
}

//* arr.filter()
const items = [
	{ name: 'Bike', price: 100 },
	{ name: 'TV', price: 200 },
	{ name: 'Album', price: 10 },
	{ name: 'Book', price: 5 },
	{ name: 'Phone', price: 500 },
	{ name: 'Computer', price: 1000 },
	{ name: 'Keyboard', price: 25 },
];

const filteredItems = items.filter((item) => {
	return item.price <= 100;
});

console.log(items);
console.log(filteredItems);

//* arr.map()
const itemNames = items.map((item) => {
	return item.name;
});
console.log(itemNames);

//* arr.find() : 조건에 만족한 1번째 요소를 return
const foundItem = items.find((item) => {
	return item.name == 'Book';
});
console.log(foundItem);

//* arr.forEach()
items.forEach((item) => {
	console.log(item.name);
});

//* arr.some() : 조건을 만족하는것이 1개 이상 존재할때
const hasInexpensiveItems = items.some((item) => {
	return item.price >= 800;
});
console.log(hasInexpensiveItems);

//* arr.every() : 조건을 모든 원소가 만족할때
const allItems = items.every((item) => {
	return item.price <= 100;
});
console.log(allItems);

//* arr.reduce()
const total = items.reduce((currentTotal, item) => {
	return item.price + currentTotal;
}, 0);
// currentTotal: 누산기, 초기값 = 0
console.log(total);

//* arr.includes(valueToFind[, fromIndex]) : 포함 여부
const numbers = [1, 2, 3, 4, 5];
const includesTwo = numbers.includes(2);
console.log(includesTwo); // true
console.log(numbers.includes(2, 2)); // false
console.log([1, 2, NaN].includes(NaN)); // true
