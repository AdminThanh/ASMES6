import { editCategory, getCategoryId } from "./models/category.model.js";
import Shared from "./main.js";
import { getProductId, getData } from "./models/product.model.js";

const shareder = new Shared();
const url = new URL(window.location.href);
const keyDetail = url.searchParams.get("keyProduct");

const actGetProductCate = async (keyDetail) => {
    const data = await getData(
        `https://asmfull-6ff42-default-rtdb.firebaseio.com/products/${keyDetail}.json`
    );
    const image = `<img src="${data.image}" alt="full-image">`;
    document.querySelector(".nameDetail").innerHTML = data.name;
    document.querySelector(".priceDetail").innerHTML = formatVND(data.price);
    document.querySelector(".descriptionDetail").innerHTML = data.detail;
    document.querySelector(".detail").innerHTML = data.detail;
    document.querySelector(".imageDetail").innerHTML = image;
    const btn_mua_product = document.querySelector(".btn_mua_product");
    btn_mua_product.innerHTML = `<button onclick="addCart(${data.id},'${data.name}',${data.price},'${data.image}')" class="cursor-pointer" id="btn-mua">Mua ngay</button>`;
}
if (keyDetail) {
    actGetProductCate(keyDetail);
}