const wallet = 2000;

function issueCredit(age, isWorking) {
	if (age >= 24 && isWorking === true) {
		wallet += 500;
		console.log("Кредит одобрен. Ваш баланс: " + wallet);
	} else if (age >= 24 && isWorking === false) {
		wallet += 100;
		console.log("Кредит одобрен с ограничениями. Ваш баланс: " + wallet);
	} else {
		console.log("Кредит не одобрен. Ваш баланс: " + wallet);
	}
}

console.log(`Начальный баланс: ${wallet}`);
issueCredit(20, false);

function computerCredit(age, hasJob) {
	switch (true) {
		case age >= 24 && hasJob === true:
			return 500;
		case age >= 24:
			return 100;
		default:
			return 0;
	}
}

function canBuy(productPrice, age, money, hasJob) {
	const credit = computerCredit(age, hasJob);
	return productPrice <= money + credit;
}

console.log(canBuy(2500, 25, 2000, true));