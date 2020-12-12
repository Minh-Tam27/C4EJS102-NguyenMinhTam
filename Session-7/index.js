// // console.log('abc');
// //KHAI Báo FUNC
// // function sayHello(parameter) {
// //   logic code
// // }

// //THực THI FUNC
// //sayHello()

// // function sayHello(name) {
// //   console.log(`Hello ${name}`);
// // }

// // sayHello('TÂM');

// //TÍNH diỆN tÍCh tam giÁC
// console.log('BÀI 1');
// let S=1;
// function Stamgiac(h, d) {
//  S = h*d/2;
//  console.log(S);
// }
// Stamgiac(3,4)

// //In ra cÁC sỐ nguyÊn [a,b]
// console.log('BÀI 2');
// let sn;
// function soNguyen(a, b){
// for(sn=a; sn<=b; sn++)
// {
//   console.log(sn);
// }
// }
// soNguyen(4,8)

// //In ra mảng các số ng [a,b]

// function generateArr(a,b){
// let arr = [];
// for(let i=a; i<=b; i++)
// {
//   arr.push(i);
// }
// console.log(arr);
// }
// generateArr(3,9)

// //tÍNH tỔNG cÁC phần tử trong mảng
// console.log('BÀI 3');
// function sum(A){
//   let sum = 0;
//   for(let i in A)
//   {
//     sum+=A[i];
//   }
//   console.log(sum); 
// }
// sum([3,4,2,2]);


// //ĐẢO chuỖI
// console.log('BÀI 4');
// function daoNguoc(daoNguoc){
//   return daoNguoc.split("").reverse().join("");  //trả về giá trị ..., mọi code dưới return trong func k hoạt động, func dừng ở đó
// }
// let r = daoNguoc('Hello World'); 
// console.log(r);


// //function trong Object
// const person = {
//   name: "Peter",
//   age: 18,
//   sex: "Male",
//   //methods:
//   sing: function() {
//     console.log('Sing lalalala');
//   },
//   sayHi: function(name){
//     console.log(`Hi ${name}`);
//   },
//   introduce: function() {
//     console.log(`My name is ${this.name}`);
//   },
// }

// //gọi 1 methods của 1 func:
// person.sayHi('Tâm');
// person.introduce();


//DOM
// //lấy html về js
// console.log('Lấy phần tử qua Id');
// let a = document.getElementById('app');
// console.log(a);
// // console.log('Lấy phần tử qua tên Class');
// // const demo = document.getElementsByClassName('demo');
// // console.log(demo);
// // console.log('Lấy phần tử qua tên thẻ');
// // const div = document.getElementsByTagName('div');
// // console.log(div);
// // console.log('thao tác như thao tác vs array');
// // console.log(div[0]);
// console.log('Xem property và value của 1 ptu');
// console.dir(a);

//innerHTML, TextContent, innerText
// console.log(app.innerHTML);
// console.log(app.textContent);
// console.log(app.innerText);


// //style
// console.log(app.style); //file css khi chuyển qua HTML
// app.style.backgroundColor = "red";



// //.id, .classList
// console.log(app.id);        //lấy id
// console.log(app.classList); //lấy class
// app.classList.add('cl3'); //thêm class
// console.log(app.classList);
// app.classList.remove('cl1'); //xóa class
// console.log(app.classList);



//.children, .parentElement
// console.log(app.children); // phần tử con
// const child = app.children[0];
// console.log(child.parentElement); //lấy cha



//methods: .remove(), .appendChild(), .createElement()
// const ul = document.getElementById('todo-list');
// console.log(ul);
// const li = document.createElement('li'); //tạo 1 thẻ
// console.log(li);
// li.innerText = 'Take a shower'; //gán nội dung vào thẻ
// ul.appendChild(li); //gán li vào ul
// li.remove(); //xóa thẻ li


//event: click
// const btn1 = document.getElementById('btn1');
// console.log(btn1);
// //c1: onclick
// function doSth() {
//   alert('Hello W');
// }
// const btn2 = document.getElementById('btn2');
// console.log(btn2);
// btn2.onclick = function() {
//   alert('Hello click');
// }

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const ul = document.getElementById('todo-list');
btn.onclick = function(){
  const li = document.createElement('li');
  li.innerText = input.value;
  ul.appendChild(li);
  input.value = "";
}