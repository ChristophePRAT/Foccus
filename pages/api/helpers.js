
const colors = ["red", "green", "blue", "yellow", "orange", "pink"];

const getColor = (excludeColor) => {
	console.log("Excluded color: " + excludeColor);
	let localColors = colors
	if (excludeColor != null) {
		localColors = localColors.filter(col => {
			return excludeColor.indexOf(col) === -1
		});
		console.log("array of colors: " + localColors);
	}
	let color = localColors[Math.floor(Math.random() * localColors.length)]
	console.log("Color: " + color)
	return color
}
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

module.exports = {
	getColor: getColor,
	capitalize: capitalize,
}
