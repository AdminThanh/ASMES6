import { get } from "firebase/database";
import { addOrder } from "./models/checkout.model.js"
import { Cart } from "./main";
import Shared from "./main.js";

const productShared = new Shared();

const cartAct = new Cart();


const addCartAction = () => {
    btnCheckout.onclick = function () {
        const hoten = document.querySelector("#hoten").value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const email = document.querySelector("#email").value.trim();
        const diachi = document.querySelector("#diachi").value.trim();
        const ghichu = document.querySelector("#ghichu").value.trim();

        if (hoten == "" || phone == "" || email == "" || diachi == "") {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
        else {
            const donhang = addOrder({
                customer_name: hoten,
                customer_address: diachi,
                customer_email: email,
                customer_phone_number: phone,
                customer_note: ghichu,
                created_date: new Date().toISOString().slice(0, 10),
                status: "Đang xác nhận",
                total: cartAct.getTotal(),
                listProduct: cartAct.getCart(),
            })
            productShared.toast("Đặt hàng thành công!", "success");
            cartAct.clearCart();
            document.querySelector("#cartListCheckout").innerHTML ="";
            document.querySelector("#form_checkout").reset();
            document.querySelector("#priceCheckoutTam").innerHTML= "0 VNĐ";
            document.querySelector("#priceCheckout").innerHTML= "0 VNĐ";
        }
    }
}
const btnCheckout = document.querySelector("#btnCheckout");
if(btnCheckout){
    addCartAction()
}

function viewCartCheckout() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) cart.forEach((sp, index) => {
        document.querySelector("#cartListCheckout").innerHTML += `
        <div class="single-item cartCheckout">
            <div class="single-item__thumb">
                <img src="${sp.image}" alt="ordered item">
            </div>
            <div class="single-item__content">
                <a href="product-details.html?id=${sp.id}">${sp.name}</a>
                <span class="priceCheckout">${formatVND(sp.price * sp.quantity)}</span>
            </div>
            <div class="single-item__remove">
                <a href="#"><i class="zmdi zmdi-delete"></i></a>
            </div>
        </div>`;
    });
}

// viewCartCheckout();

function cartCheckout() {
    var cartCheckout = document.getElementsByClassName('priceCheckout');
    var tongCartCheckout = 0;
    for (cartCheckout of cartCheckout) {
        {
            tongCartCheckout += parseInt(deleteNotNum(cartCheckout.innerHTML));
        }
    }
    const priceCheckout = document.getElementById('priceCheckout');
    if(priceCheckout){
        priceCheckout.innerHTML = formatVND(tongCartCheckout);
    }
    const priceCheckoutTam = document.getElementById('priceCheckoutTam');
    if(priceCheckoutTam){
        priceCheckoutTam.innerHTML = formatVND(tongCartCheckout);
    }
}
cartCheckout();

// Đặt hàng
function dathang() {
    document.querySelector("#btnCheckout").onclick = function () {
        hoten = document.querySelector("#hoten").value.trim();
        phone = document.querySelector("#phone").value.trim();
        email = document.querySelector("#email").value.trim();
        diachi = document.querySelector("#diachi").value.trim();
        ghichu = document.querySelector("#ghichu").value.trim();

        if (hoten == "" || phone == "" || email == "" || diachi == "") {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
        else {
            var donhang = {
                "customer_name": hoten,
                "customer_address": diachi,
                "customer_email": email,
                "customer_phone_number": phone,
                "customer_note": ghichu,
                "created_date": new Date().toISOString().slice(0, 10),
                "status": "Đang xác nhận"
            }

            urlOrders = "http://localhost:3500/orders";
            options = {
                method: "POST",
                body: JSON.stringify(donhang),
                headers: { 'Content-Type': 'application/json' }
            }
            fetch(urlOrders, options).then(res => res.json())
                .then(data => {
                    orderId = data.id;
                    saveOrderDetail(orderId); // Lấy ID ra để lưu chi tiết đơn hàng
                    console.log(data);
                })
        }
    }
}
// dathang();

function saveOrderDetail(orderId) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart)
    cart.forEach(sp => {
        let objSP = {
            "orderId": orderId,
            "productId": sp.id,
            "quantity": sp.quantity,
            "unit_price": sp.price * sp.quantity
        }
        urlDetail = "http://localhost:3500/order_details";
        options = {
            method: "POST",
            body: JSON.stringify(objSP),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch(urlDetail, options).then(res => res.json())
            .then(detail => {
                console.log(detail);
                localStorage.removeItem("cart");
            })
    })
}