const bt = document.getElementById("ex-2");
bt.onclick = function () {
	const change = document.getElementById("changeBg");
  change.style.backgroundColor = RadomColor();
};
function RadomColor() {
	let r = Math.ceil(Math.random()*255);
	let g = Math.ceil(Math.random()*255);
	let b = Math.ceil(Math.random()*255);
	let color = `rgb(${r},${g},${b})`;
	return color;
}