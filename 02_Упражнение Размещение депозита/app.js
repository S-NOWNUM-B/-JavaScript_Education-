const deposite = 12000;
const rate = 0.07;
const depositLength = 24;
const houseCost = 15500;

const res = deposite * (1 + rate / 12) ** depositLength;
if (res > houseCost) {
	console.log(`Мы накопили: ${res}. Можем купить. Остаток ${res - houseCost}`);
} else {
	console.log(`Мы накопили: ${res}. Купить не сможем!!!`);
}