//? map()

//? 배열 모든 요소에 주어진 함수를 실행하여 새로운 배열로 반환

const arr = [1, 4, 9, 16];

const map = arr.map((x) => x * 2);

console.log(map); // [ 2, 8, 18, 32 ]

const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 },
];

const itemNames = items.map((item) => item.name);

console.log(itemNames);
/*
[
  'Bike',     'TV',
  'Album',    'Book',
  'Phone',    'Computer',
  'Keyboard'
]
*/
