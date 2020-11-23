let add = document.getElementById("add");
let them = document.getElementById("them");
let nd = document.getElementById("nd");
let so = 1;
let arr = [];
let chuaGach = true;
let colorDefault = "#C4E538";
add.addEventListener("click", () => {
	if (nd.value !== null || nd.value !== "") {
		if (!arr.includes(nd.value)) {
			arr.push(nd.value);
			obs = `<li class="todo" id="${so}" style="margin-bottom:10px">${nd.value} <button class="close" style="background-color:${colorDefault}">X</button> 
                    <button class="del" style="background-color: #C4E538;">Delete</button></li>`;
			them.insertAdjacentHTML("afterend", obs);
			close = document.getElementsByClassName("close");
			del = document.getElementsByClassName("del");
			for (let i = 0; i < close.length; i++) {
				close[i].addEventListener("click", (e) => {
					console.log(so);
					if (chuaGach) {
						close[i].parentNode.style.textDecoration = "line-through";
						console.dir(close[i]);
						close[i].style.background = "#FDA7DF";
						close[i].textContent = "V";
						chuaGach = !chuaGach;
					} else {
						close[i].parentNode.style.textDecoration = "initial";
						close[i].style.background = "#C4E538";
						close[i].textContent = "X";
						chuaGach = !chuaGach;
					}
					// del[i].addEventListener("click", (e) => {
					//     console.log(del[i].parentNode)
					//     del[i].parentNode.remove()
				});
			}
			so++;
		}
	}
});
const a = document.getElementById("demo");
console.dir(a);
//selector: id - class name - tag name
//query selector
//

// Basic properties
// .children, .parentElement
// .classList
// => methods: .classList.add(), .classList.contains(), .classList.remove()
// .id
// .innerHTML, .innerText, .textContent;
// .style
// Basic methods
// .createElement()
// .appendChild()
// .remove()



// addEventListener('click', function(event){})
// 'click', 'enter', 'submit' cua form
// event object - event.target


