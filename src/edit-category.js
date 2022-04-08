import { editCategory, getCategoryId } from "./models/category.model.js";
import Shared from "./main.js";

const shareder = new Shared();
const url = new URL(window.location.href);
const keyCate = url.searchParams.get("key");

const idCate = document.querySelector("#idCate");
const nameCate = document.querySelector("#nameCate");

// IIFE
if (keyCate) {
    (async (keyCate) => {
        const res = await getCategoryId(keyCate);
        const cate = res.val();
        nameCate.value = cate.name;
        idCate.value = cate.id;
    })(keyCate);
}


const ActEditCate = (e) => {
    e.preventDefault();
    const idCate = document.querySelector("#idCate").value;
    const nameCate = document.querySelector("#nameCate").value;

    const result = editCategory(keyCate, {
        id: idCate,
        name: nameCate,
    });

    if (result) {
        shareder.toast("Sửa danh mục thành công!", "success");
    } else {
        shareder.toast("Sửa danh mục thất bại!", "danger");
    }
};

const btnEditCategory = document.querySelector("#btnEditCategory");
if (btnEditCategory) {
    btnEditCategory.addEventListener("click", ActEditCate);
}
