const {getColor} = require('./helpers');

test('Chooses different colors', () => {
	let color = getColor();
	expect(color).not.toBe(getColor([color]));
})
