// Базовые арифметические операции

//const width = 10;
//const height = 5;

//const space = width * height;
//const newWidth = width - 4;
//const newWidth2 = width + 4;
//const division = newWidth / newWidth2;
//const volume = 2 ** 3;

//console.log('Площадь равна ' + space);
//console.log('Новое значение ширины ' + newWidth);
//console.log('Новое значение ширины 2 ' + newWidth2);
//console.log('Результат деления ' + division);
//console.log('Объем куба ' + volume);

// Строки
//const city = 'Москва';
//const street = 'Новословодская';
//console.log(city + ', ' + street + ' ' + 5);

// Операторы присвоения

//let age = 18 + 5;
//age += 2;
//age -= 3;
//age *= 2;
//age /= 2;

//age++;
//age--;

//console.log(age);

// Операторы сравнения

//const vasia = 20;
//console.log(age > vasia);
//console.log(age >= vasia);
//console.log(age < vasia);
//console.log(age <= vasia);
//console.log(age == vasia);

// Таблица приоритетов операторов

//const a = 100 - 10 > 90 - 5;
//console.log(a);

// Корочеб стандартные правила которым обучаались на математике в школе работают и в JavaScript

// Шаблонные строки

//const projectname = 'Site magazine';
//const price = 2000;
//const author = 'Vasiliy Pupkin';

//const template = `${author} заказал ${projectname} стоимостью ${price} рублей`;

//console.log(template);

// Преобразование типов

//const age = '18';
//console.log(Number(age) + 5);
//console.log(age * 3);

//const userName = 'Вася';
//console.log(Number(userName) + 5);

//console.log(typeof NaN);
//console.log(String(4) + 7);
//console.log(Boolean(-24));
//console.log(true + 2);

//const a = 2 + '10';
//console.log(a - 10);

// False из других типов

//console.log(Boolean(0));
//console.log(Boolean(''));
//console.log(Boolean(null));
//console.log(Boolean(undefined));
//console.log(Boolean(Number('sx')));
//console.log(Boolean(NaN));


// if else

//const age = 18;

//if (age) {
//	console.log('Переменная age привела к true');
//} else {
//	console.log('Переменная age привела к false');
//}

//const money = 1000;

//if (money >= 500) {
//	console.log('Достаточно денег');
//} else if (money < 500) {
//	console.log('Недостаточно денег');
//} else {
//	console.log('Что-то пошло не так');
//}

//console.log('Программа завершена');

// switch case

//const role = 'admin';

//switch(role) {
//	case 'admin':
//		console.log('У вас полный доступ');
//		break;
//	case 'editor':
//		console.log('У вас доступ на редактирование');
//		break;
//	case 'user':
//		console.log('У вас ограниченный доступ');
//		break;
//	default:
//		console.log('Роль не определена');
//}

// Пример использования switch с выражением true


//const num = 1;

//switch(true) {
//	case num > 0:
//		console.log('Положительное число');
//		break;
//	case num < 0:
//		console.log('Отрицательное число');
//		break;
//	case num === 0:
//		console.log('Ноль');
//		break;
//	default:
//		console.log('Это не число');
//}

// Тернарный оператор

//const bmw = 100000;
//const ford = 10000;
//const budget = 20000;

//let message = budget > bmw ? 'BMW' : 'Форд';

//console.log(`Я хочу купить ${message}`);

// Логические операторы

// Оператор И (&&)

//let isAdmin = true;
//let canWrite = false;


//console.log(`Системный файл ${isAdmin && canWrite ? 'можно редактировать' : 'нельзя редактировать'}`);

//isAdmin = true;
//canWrite = true;

//console.log(`Системный файл ${isAdmin && canWrite ? 'можно редактировать' : 'нельзя редактировать'}`);

// Оператор ИЛИ (||)

//isAdmin = false;
//canWrite = true;

//console.log(`Обычный файл ${isAdmin || canWrite ? 'можно редактировать' : 'нельзя редактировать'}`);

//isAdmin = false;
//canWrite = false;

//console.log(`Обычный файл ${isAdmin || canWrite ? 'можно редактировать' : 'нельзя редактировать'}`);

// Оператор НЕ (!)

//isAdmin = true;

//console.log(`Пользователь не администратор: ${!isAdmin}`);

// Операторы с другими типами

//console.log('Вася' || 'Петя');
//console.log(false || 'Петя');
//console.log('Вася' || false);
//console.log(false || false);

//console.log('Вася' && 'Петя');
//console.log(false && 'Петя');
//console.log('Вася' && false);
//console.log(false && false);

//let a;
//const userName = a || 'Гость';
//console.log(userName);

//const isAdmine = false;
//const filename = isAdmine && 'file.txt';
//console.log(filename);

// Оператор нулевого слияния (??)

//let username = '';
//console.log(username || 'Гость');

// Если username равно null или undefined, тогда вернется 'Гость'. Это сделано для того, чтобы пустая строка считалась значением.
//console.log(username ?? 'Гость');

//Функции

//function consoleLogName(first_name, last_name) {
//	return `Привет, ${first_name} ${last_name}!`;
//}

//console.log(consoleLogName('Вася', 'Пупкин'));

// Стрелочные функции

//const poft = (num) => num ** 2;
//console.log(poft(5));

//const KG_IN_USD = 7;
//const KM_IN_USD = 5;

//const calculatorW = (present) => present * KG_IN_USD;

//const calculatorD = (distance) =>distance * KM_IN_USD;

//function getTotal(present1, present2, distance) {
//	present1 = calculatorW(present1);
//	present2 = calculatorW(present2);
//	distance = calculatorD(distance);
	
//	return present1 + present2 + distance;
//}

//console.log(getTotal(1, 2, 10));