


//lưu trữ công việc

let listTalk = JSON.parse(localStorage.getItem("listtalk")) || [];


// lấy  nút thêm công công việc
let addbtn = document.querySelector(".add");
addbtn.addEventListener("click", addclick);
function addclick() {
    // lấy thông tin từ người nhập
    let inputText = document.querySelector(".taskName").value.trim();

    if (inputText == "") {
        return;
    }

    let newtalk = {
        name: inputText,
        progress: 1
    }

    listTalk.push(newtalk);
    localStorage.setItem("listtalk", JSON.stringify(listTalk));

    //hiển thị

    // cập nhật
}


function viewtalk() {
    let talktable = document.querySelector(".talk");

    talktable.innerHTML = ``;
    listTalk.forEach((talks, index) => {
        talktable.innerHTML += `
        <div class="member">
            <div>${talks.name}</div>
            <div class="board">
                <div class="column" id="pendingCol">
                    <h3>🕐 Chờ xử lý</h3>
                    <div id="pendingTasks">
                        <!-- <div class="task" >
                      <p>Nội dung</p>
                      <button>Chuyển tiếp</button>
                    </div> -->
                    </div>
                </div>
                <div class="column" id="inProgressCol">
                    <h3>🔨 Đang làm</h3>
                    <div id="inProgressTasks"></div>
                </div>
                <div class="column" id="doneCol">
                    <h3>✅ Hoàn thành</h3>
                    <div id="doneTasks">
                        <!-- <div class="task">
                      <p>Nội dung</p>
                    </div> -->
                    </div>
                </div>
            </div> 

        </div>
        `
    });
}
 viewtalk();

