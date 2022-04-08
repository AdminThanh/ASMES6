import { addProduct } from "./models/product.model.js";
import { getAllCategory } from "./models/category.model.js";
import Shared from "./main";
const shared = new Shared();

const btnAddProduct = document.querySelector("#btnAddProduct");
const categorieId = document.getElementById("categorieId");

if (categorieId) {
    shared.render(categorieId, getAllCategory, ({ name, id }, key) => {
        return `<option value='${id}'>${name}</option>`;
    });
}

const ActAddProduct = (e) => {
    e.preventDefault();
    const categorieId = document.querySelector("#categorieId").value;
    const idProduct = document.querySelector("#idProduct").value;
    const nameProduct = document.querySelector("#nameProduct").value;
    const priceProduct = +document.querySelector("#priceProduct").value;
    const imageProduct = document.querySelector("#imageProduct").value;
    const detailProduct = document.querySelector("#detailProduct").value;

    const result = addProduct({
        categorieId: categorieId,
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
        image: imageProduct,
        detail: detailProduct,
        import_date: new Date().toISOString().slice(0, 10),
    });

    if (result) {
        shared.toast("Thêm sản phẩm thành công!", "success");
    } else {
        shared.toast("Thêm sản phẩm thất bại!", "danger");
    }

    // Reset form
    const fromdata = document.querySelector("#fromdata");
    fromdata.reset();
};

if (btnAddProduct) {
    btnAddProduct.addEventListener("click", ActAddProduct);
}
