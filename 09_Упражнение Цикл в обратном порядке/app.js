const arr = ['!', 'JS', 'люблю', 'Я'];
const result_arr = [];

for (let i = arr.length - 1; i >= 0; i--) {
	result_arr.push(arr[i]);
}
console.log(result_arr.join(' '));