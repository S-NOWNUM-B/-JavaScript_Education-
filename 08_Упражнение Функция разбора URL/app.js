const url = 'https://purpleschool.ru/course/javascript';
const url2 = 'ftp://example.com/path/to/resource';

console.log(`Протокол: ${url.split('://')[0]}`);
console.log(`Домен: ${url.split('/')[2]}`)
console.log(`Путь внутри сайта: /${url.split('/').slice(3).join('/')}`);

function getUrlParts(url) {
	const [protocol, _ , host, ...path] = url.split('/');
	if (protocol === 'https:' || protocol === 'http:') {
		if (!host.includes('.')) {
			return;
		}
		console.log(`Протокол: ${protocol.split(':')[0]}`);
		console.log(`Доменное имя: ${host}`);
		console.log(`Путь внутри сайта: /${path.join('/')}`);
	}
	console.log('Некорректный протокол');
}

getUrlParts(url2);