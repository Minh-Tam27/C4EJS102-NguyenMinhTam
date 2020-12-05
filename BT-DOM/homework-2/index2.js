const time = document.getElementById("time");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const status = document.getElementById("status");

//trước khi chạy, biến đếm = 0, hiển thị ra màn hình = 0, nút stop vô hiệu hóa
let runner = 0;
status.innerHTML = 0;
stop.disabled = true;

//khi chạy, nút start đã dc click nên sẽ bị vô hiệu hóa, nút stop dc mở
//biến đếm bằng giá trị được nhập vào, nếu để trống/<=0/dạng chữ sẽ dc thông báo k hợp lệ
//truyền giá trị đếm ra màn hình
//dùng setInterval(hàm dc thực hiện,1000) để thực hiện hàm sau mỗi 1s
//hàm: biến đếm giảm dần, show giá trị ra màn hình. Nếu biến đếm đạt giá trị = 0, hiển thị ra màn hình 'Times up', nút start dc mở và stop đóng
start.onclick = function(){
    start.disabled = true;
    stop.disabled = false;
    runner = time.value;
    if (runner == null || runner <= 0) {
        alert("Invalid time");
    }
    status.innerHTML = runner;
    
    let myTimer = setInterval(() => {
        runner--;
        status.innerHTML = runner;
        if (runner == 0) {
            clearInterval(myTimer);
            status.innerHTML = 'Times up';
            start.disabled = false;
            stop.disabled = true;
        };
    }, 1000);
};

//khi nút stop dc bấm, nút start dc mở, stop vô hiệu hóa.
//xóa hàm dc tạo ở trên để dừng đếm và hiển thị ra màn hình 
stop.addEventListener('click', () => {
    start.disabled = false;
    stop.disabled = true;
    clearInterval(myTimer);
    status.innerHTML = 'Stopped';
});