import { addProduct, editProduct, getProductId } from "./models/product.model.js";
import { getAllCategory } from "./models/category.model.js";

import Shared from "./main";
const shared = new Shared();

const uri = new URL(window.location.href);
const key = uri.searchParams.get("id");

const categorieId = document.querySelector("#categorieId");
const idProduct = document.querySelector("#idProduct");
const nameProduct = document.querySelector("#nameProduct");
const priceProduct = document.querySelector("#priceProduct");
const imageProduct = document.querySelector("#imageProduct");
const detailProduct = document.querySelector("#detailProduct");


// IIFE
if (key) {
    (async (key) => {
        const res = await getProductId(key);
        const product = res.val();

        shared.render(document.querySelector("#categorieId"), getAllCategory, ({ name, id }, key) => {
            return `<option value='${id}' ${product.categorieId === id ? "selected" : ""}>${name}</option>`;
        });

        nameProduct.value = product.name;
        idProduct.value = product.id;
        priceProduct.value = product.price;
        detailProduct.value = product.detail;
        imageProduct.value = product.image;
    })(key);
}


const ActEditProduct = (e) => {
    e.preventDefault();
    const categorieId = document.querySelector("#categorieId").value;
    const idProduct = document.querySelector("#idProduct").value;
    const nameProduct = document.querySelector("#nameProduct").value;
    const priceProduct = document.querySelector("#priceProduct").value;
    const imageProduct = document.querySelector("#imageProduct").value;
    const detailProduct = document.querySelector("#detailProduct").value;

    const result = editProduct(key, {
        categorieId: categorieId,
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
        image: imageProduct,
        detail: detailProduct,
        import_date: new Date().toISOString().slice(0, 10),
    });

    if (result) {
        shared.toast("Sửa sản phẩm thành công!", "success");
    } else {
        shared.toast("Sửa sản phẩm thất bại!", "danger");
    }
};

const btnEditProduct = document.querySelector("#btnEditProduct");
if (btnEditProduct) {
    btnEditProduct.addEventListener("click", ActEditProduct);
}
