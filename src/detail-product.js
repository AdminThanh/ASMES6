import { editCategory, getCategoryId } from "./models/category.model.js";
import Shared from "./main.js";
import { getProductId } from "./models/product.model.js";

const shareder = new Shared();
const url = new URL(window.location.href);
const keyDetail = url.searchParams.get("keyProduct");

console.log(keyDetail)
// IIFE
if (keyDetail) {
    (async (keyDetail) => {
        const res = await getProductId(keyDetail);
        const product = res.val();
        const image = `<img src="${product.image}" alt="full-image">`;
        document.querySelector(".nameDetail").innerHTML = product.name;
        document.querySelector(".priceDetail").innerHTML = formatVND(product.price);
        // document.querySelector(".CatenameDetail").innerHTML = product.categorie.name;
        document.querySelector(".descriptionDetail").innerHTML = product.detail;
        document.querySelector(".detail").innerHTML = product.detail;
        document.querySelector(".imageDetail").innerHTML = image;

    })(keyDetail);
}

