'use strict';
const pug = require('pug');

function test_pug() {
	const text = `p This is a text template.

p We input variable and we get replacement: #{var0}.
p Here another variable: #{var1}.`;
	const variables = {
		var0: "Value",
		var1: "Another Value",
	};
	const anotherVariables = {
		var0: "Another Value",
		var1: "Another Another Value",
	};

	const t0 = new Date();
	const template = pug.compile(text);
	const t1 = new Date();
	const result = template(variables);
	const t2 = new Date();
	template(anotherVariables);
	template(anotherVariables);
	template(anotherVariables);
	template(anotherVariables);
	template(anotherVariables);
	template(anotherVariables);
	template(anotherVariables);
	template(anotherVariables);
	template(anotherVariables);
	const result2 = template(anotherVariables);
	const t3 = new Date();

	console.log(`----------`)
	console.log(`pug`);
	console.log(`compile template time: ${t1.getTime() - t0.getTime()} milli-second(s)`);
	console.log(`replace variables time: ${t2.getTime() - t1.getTime()} milli-second(s)`);
	console.log(`another run: ${(t3.getTime() - t2.getTime()) / 10} milli-second(s)`);
	console.log(`result: ${result}`);
	console.log(`another result: ${result2}`);
	return;
}

module.exports = test_pug;
