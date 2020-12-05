// //SELECTOR: ID - CLASS NAME - TAG NAME
// let h1 = document.getElementById("head");
// console.log(h1);

// let d = document.getElementsByClassName("div1");
// console.log(d); // kết quả trả về là 1 mảng cùng class => có thể thao tác vs từng phần tử giống như mảng

// let tag = document.getElementsByTagName("div");
// console.log(tag); //kết quả trả về là 1 mảng nhưng cùng có tên/thẻ/... là div







// //QUERY SELECTOR, QUERY SELECTOR ALL
// //Query Seclector
// let qS = document.querySelector('.div1'); // kết quả cho về là phần tử đầu tiên dc trỏ tới (trong vd là ptu đầu tiên của class)
// console.log(qS);

// //Query Selector All
// let x = document.querySelectorAll('.div1');//kq trả về là 1 mảng tên NodeList gồm tất cả các ptu trong class
// console.log(x);







// //BASIC PROPERTIES
// //Text and Content
// console.dir(head); //xem properties của id head
// console.log(h1.innerHTML); //xem bên trong thẻ h1 của html
// h1.innerHTML = "<em>Minh Tâm</em>"; //innerHTML: có thể thay đổi nội dung theo dạng HTMl

// console.log(d.innerText); //xem nội dung text bên trong thẻ h1 mà k có thẻ
// d.innerText = "<i>Hellu<i>"; //innerText và textContent: khi thay đổi nội dung có chứa thẻ của HTML sẽ xuất ra cả text thẻ
// console.log(tag.textContent); //như trên

// //Style
// console.log(h1.style); //xem các properties và value bên CSS (của h1)
// console.log(h1.style.color); //hiển thị value của properties đã chỉ (value của color của h1)
// h1.style.color = "red"; //thay value của properties

// // .children, .parentElement
// let ul = document.getElementById("list");
// console.log(ul.children); //gọi các phần tử con của ul; kết quả trả về là 1 mảng gồm các phần tử con dạng HTML => có thể thao tác như thao tác vs mảng
// console.log(ul.children[2].parentElement); //từ 1 phần tử của mảng gọi lại cả mảng

// //.classList,.id
// console.log(ul.id);
// ul.id = "some"; // kết quả trả về id = some, tương tự thao tác update biến bt
// console.log(ul.id);
// // => methods: .classList.add(), .classList.contains(), .classList.remove()
// console.log(ul.classList); // kq là 1 mảng DOMTokenList gồm các ptu là tên class
// ul.classList.add("cl5"); //thêm class cl5
// ul.classList.remove("cl3"); //xóa class cl3
// console.log(ul.classList.contains("cl4")); //kiểm tra 1 class có thuộc classlist hay k








// // BASIC METHODS
// // .remove()
// let li = ul.children[2];
// li.remove(); // xóa 1 phần tử
// // .createElement()
// let newLi = document.createElement("li"); //tạo 1 thẻ mới: tên biến = document.createElement("tên thẻ");
// newLi.innerHTML = "self-learn"; //thêm nội dung vào trong thẻ
// console.log(newLi);
// // .appendChild()
// let newul = ul.children[1].parentElement;
// newul.appendChild(newLi); //thêm newLi vào newul












// //EVENT
// //click
// const btn = document.getElementById("btn");
// btn.onclick = function () {
// 	//onclick: mỗi lần click chuột sẽ xảy ra action trong function
// 	const div = document.getElementById("ex-1"); //lấy ex-1 bên html
// 	if (!div.classList.contains("ex-1")) {
// 		//nếu k có thì cho có và ngược lại; như VD: click lần 1 ẩn ex-1, lần 2 hiện ex-1. tùy thuộc có thể chỉnh background,... trong CSS
// 		div.classList.add("ex-1");
// 	} else {
// 		div.classList.remove("ex-1");
// 	}
// };
// //bt: thay dổi màu background sau mỗi lần click
// const bt = document.getElementById("btn-2");
// bt.onclick = function () {
// 	const change = document.getElementById("changeBg");// lấy phần cần thay khi click
//   change.style.backgroundColor = generateRadomColor(); //thay đổi màu sau mỗi lần click
// };
// function generateRadomColor() {
// 	let r = Math.floor(Math.random()*255);
// 	let g = Math.floor(Math.random()*255);
// 	let b = Math.floor(Math.random()*255);
// 	let color = `rgb(${r},${g},${b})`;
// 	return color;
// }


// addEventListener('click', function(event){})

// CLICK, ENTER, SUBMIT CỦA FORM
// bài toán to do list

//click
// const add = document.getElementById('add');//lấy button add bên HTML
// add.onclick = function () { //khi ấn vào button add sẽ xảy ra event:
// const todo = document.getElementById('todo'); //lấy dữ liệu trong ô input trong html
// let ul = document.getElementById('them'); //lấy list danh sách bên HTML
// let a = document.createElement('li'); //tạo phần tử li để cho vào list
// a.innerHTML = todo.value; //gán giá trị bên trong phần tử li
// them.appendChild(a); //gán phần tử đã có giá trị vào list
// }


//enter
// const add = document.getElementById('add');//lấy button add bên HTML
// add.onclick = function () { //khi ấn vào button add sẽ xảy ra event:
// const todo = document.getElementById('todo'); //lấy dữ liệu trong ô input trong html
// let ul = document.getElementById('them'); //lấy list danh sách bên HTML
// let a = document.createElement('li'); //tạo phần tử li để cho vào list
// a.innerHTML = todo.value; //gán giá trị bên trong phần tử li
// them.appendChild(a); //gán phần tử đã có giá trị vào list
// }


//submit
const mainForm = document.getElementById('main-form');
mainForm.onsubmit = function(event){ //khi dùng form phải dùng event vào function
event.preventDefault(); //ngăn thao tác onsubmit bị nháy (có thể dùng cho các thao tác khác)
const inputValue = mainForm.todoContent.value; //lấy giá trị của todoContent trong form
let insert = document.getElementById('insert');//lấy list ở HTML về
if(inputValue) //nếu inputValue tồn tại/có giá trị => mới thực hiện các bước tiếp
{
  // //cách 1: tạo nút xóa, gán sự kiện click cho nút xóa, gọi parent của button đó và xóa
 
  // let li = document.createElement('li');//tạo phần tử li
  // li.innerHTML = inputValue; //gán giá trị trong ptu li
  
  // const delBtn = document.createElement('button');//tạo button
  // delBtn.innerHTML = 'Delete';//đăt tên cho button
  // li.appendChild(delBtn);//cho button vào li
  // delBtn.onclick = function(){
  //   const delParent = delBtn.parentElement;
  //   delParent.remove();
  // }
  // insert.appendChild(li);// gán phần tử li đã có vào list
  // mainForm.todoContent.value = "";// k hiện trong ô các giá trị vừa nhập nữa (để nhập cái khác)
  
  // event object - event.target
  //cách 2:
  const li = `<li>${inputValue}<button class='del-btn'>Delete</button></li>`;
  insert.innerHTML += li;
  mainForm.todoContent.value = "";
}
}
insert.onclick = function(event) {
if(event.target.classList.contains('del-btn'))
{
  event.target.parentElement.remove();
}
}