window.addEventListener("DOMContentLoaded", () => {
	const getNumberFromInput = (node) => {
		return parseInt(node.value);
	};

	document.querySelector("#add").addEventListener("click", (event) => {
		const a = getNumberFromInput(document.querySelector("#a"));
		const b = getNumberFromInput(document.querySelector("#b"));
		document.querySelector("#target").innerText = a + b;
	});
});
