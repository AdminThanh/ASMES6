import { getAllProduct, deleteProduct, getProductNew, getProductTop, getData } from "./models/product.model.js";
import Shared from "./main.js";
const shared = new Shared();

// ĐẾM NUM CART
const numCart = () => {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var quantity = 0;
    if (cart) {
        for (cat of cart) {
            quantity += cat.quantity;
        }
        numCart.innerHTML = quantity;
    }
}
const numCartEl = document.querySelector("#numCart");

if(numCartEl){
    numCart();
}
// THÊM VÀO GIỎ HÀNG
const addCart = (id, ten, gia, hinh) => {
    var cart = JSON.parse(localStorage.getItem("cart")); // Lưu vào localStorage
    if (cart == null) {
        cart = [];
        cart.push({ id: id, name: ten, price: gia, image: hinh, quantity: 1 });
    }
    else {
        let item = cart.find(item => item.id === id);
        if (item) item.quantity++;
        else cart.push({ id: id, name: ten, price: gia, image: hinh, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    numCart();
    deleteList();
    viewCart();
    cartLeft()
}

// Xóa cart
const deleteList = () => {
    document.querySelector("#list_cart").innerHTML = "";
}

// XEM CART
const viewCart = () => {
    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) cart.forEach((sp, index) => {
        document.querySelector("#list_cart").innerHTML += `<div class="shp__single__product">
                            <div class="shp__pro__thumb">
                                <a href="product-details.html?id=${sp.id}">
                                    <img src="${sp.image}" alt="product images">
                                </a>
                            </div>
                            <div class="shp__pro__details">
                                <h2><a href="product-details.html?id=${sp.id}">${sp.name}</a></h2>
                                <span class="quantity">Số lượng: ${sp.quantity}</span>
                                <span class="shp__price" id="price_total">${formatVND(sp.price * sp.quantity)}</span>
                            </div>
                            <div class="remove__btn">
                                <a title="Remove this item" onclick="deteleCart(this,${index})" class="deletaCart"><i class="zmdi zmdi-close"></i></a>
                            </div>
                        </div>`;
    });
}

viewCart();

// Cart
const cart_left = document.getElementsByClassName('shp__price');

const cartLeft = () => {
    var cart_left = document.getElementsByClassName('shp__price');
    var tongLeft = 0;
    for (cart_left of cart_left) {
        {
            tongLeft += parseInt(deleteNotNum(cart_left.innerHTML));
        }
    }
    const total__price = document.getElementById('total__price');
    if(total__price){
        total__price.innerHTML = formatVND(tongLeft);
    }
}

if(cart_left){
    cartLeft();
}

// XÓA CART ITEM
const deteleCart = (element, index) => {
    var tr = element.parentElement.parentElement;
    tr.remove();
    var cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.removeItem("cart");
    localStorage.setItem("cart", JSON.stringify(cart));
    numCart()
    deleteList()
    viewCart();
    cartLeft()
}


