import { getData } from "./models/product.model.js";

// doanh thu
const doanhthu = document.querySelector("#doanhthu");
const danhmuc = document.querySelector("#danhmuc");
const sanpham = document.querySelector("#sanpham");
const donhang = document.querySelector("#donhang");

const getDoanhthu = async () => {
    const data = await getData(
        `https://asmfull-6ff42-default-rtdb.firebaseio.com/orders.json`
    );
    var total = 0;
    Object.keys(data)
        .map((key) => {
            total += data[key].total;
        })
    doanhthu.innerHTML = formatVND(total);
};

if (doanhthu) {
    getDoanhthu();
}

// Danh mục
const getDanhmuc = async () => {
    const data = await getData(
        `https://asmfull-6ff42-default-rtdb.firebaseio.com/categories.json`
    );
    danhmuc.innerHTML = data.length;
};

if (danhmuc) {
    getDanhmuc();
}

// Sản phẩm
const getSanPham = async () => {
    const data = await getData(
        `https://asmfull-6ff42-default-rtdb.firebaseio.com/products.json`
    );
    sanpham.innerHTML = data.length;
};

if (sanpham) {
    getSanPham();
}

// Đơn hàng
const getDonHang = async () => {
    const data = await getData(
        `https://asmfull-6ff42-default-rtdb.firebaseio.com/orders.json`
    );
    var total = 0;
    Object.keys(data)
        .map((key) => {
            total++;
        })
    donhang.innerHTML = total;
};

if (donhang) {
    getDonHang();
}
