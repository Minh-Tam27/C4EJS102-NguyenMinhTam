let plus = document.getElementById('plus');
let subtract = document.getElementById('subtract');

let num = document.getElementById('num');

//tạo 1 biến đếm = 0, cho giá trị của số dc hiển thị bên HTML bằng biến đếm
let count = 0;
num.innerHTML = count;

plus.onclick = function() {
  num.innerHTML++;
}
subtract.onclick = function() {
  num.innerHTML--;
}