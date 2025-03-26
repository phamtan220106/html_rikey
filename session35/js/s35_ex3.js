document.addEventListener("DOMContentLoaded", function () {


    const products = [
        {
            id: 1,
            name: 'Laptop Dell XPS 15',
            price: 35999999,
            image: 'https://cdn.tgdd.vn/Files/2021/09/06/1380709/dell3511-shivtechsmart_1280x774-800-resize.jpg',
            description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
        },
        {
            id: 2,
            name: 'iPhone 15 Pro Max',
            price: 32999999,
            image: 'https://th.bing.com/th/id/OTP.PO8M@8Vxndz_455at@qGawHaFj?rs=1&pid=TmgDetMain',
            description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
        },
        {
            id: 3,
            name: 'Samsung Galaxy S24 Ultra',
            price: 28999999,
            image: 'https://th.bing.com/th/id/OTP.n5ZE9e4C919Ed2cLhNKjPAHaEK?rs=1&pid=TmgDetMain',
            description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
        },
        {
            id: 4,
            name: 'Tai nghe Sony WH-1999XM5',
            price: 7999999,
            image: 'https://down-vn.img.susercontent.com/fi1e/vn-11134297-7qukw-1jv36f@uj8xuaf',
            description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 39 giờ.'
        },
        {
            id: 5,
            name: 'Apple Watch Series 9',
            price: 11999999,
            image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-watch-Series-9.jpg?quality=82&strip=all',
            description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
        },
        {
            id: 6,
            name: 'Loa JBL Charge 5',
            price: 3999999,
            image: 'https://th.bing.com/th/id/OTP.kNp66Lw41hQ7BMsxrddSZQHaHa?rs=1&pid=TmgDetMain',
            description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 29 giờ.'
        }
    ];

    

    // tạo sự kiện khi ấn nut tìm kiếm
    let click_search = document.querySelector(".click-search");// lấy nút tìm kiếm
    click_search.addEventListener("click", searchclick);

    function searchclick() {
        let divcontent = document.querySelector(".content");// lấy phần chứa nội dung;
        divcontent.innerHTML = "";
        // lấy giá trị từ người dùng
        let inputtext = document.querySelector(".input").value.trim();
        //validate
        if (inputtext === "") {
            alert("chưa điền thông tin");
            return;
        }

        let newAsp = products.filter(a => a.name === inputtext);// tìm kiếm toàn bộ sp có tên giống tìm kiếm
        if (newAsp.length === 0) {
            divcontent.textContent = `khoong có sp`;
            return;
        }

        // thêm nội dung vào thẻ
        updateview(newAsp, divcontent);




    }
    function updateview(A, divcontent) {
        // tạo thẻ member
        A.forEach(sp => {

            let memberDiv = document.createElement("div");
            memberDiv.classList.add("member");

            memberDiv.innerHTML = `
        <img src="${sp.image}" alt="">
        <h3><b>${sp.name}</b></h3>
        <p class="content-mini">${sp.description}</p>
        <p class="price">${sp.price}</p>
        <button class="buy">buy</button>
        `;

            divcontent.appendChild(memberDiv);

        });

    }

});