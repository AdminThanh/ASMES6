import { addCategory } from "./models/category.model.js";
import Shared from "./main.js";
const shared = new Shared();

const btnAddCategory = document.querySelector("#btnAddCategory");

const ActAddCategory = (e) => {
    e.preventDefault();
    const idCate = document.querySelector("#idCate").value;
    const nameCate = document.querySelector("#nameCate").value;

    const result = addCategory({
        id: idCate,
        name: nameCate
    });

    if (result) {
        shared.toast("Thêm danh mục thành công!", "success");
    } else {
        shared.toast("Thêm danh mục thất bại!", "danger");
    }

    const dataForm = document.querySelector("#dataForm");
    dataForm.reset();
};

if (btnAddCategory) {
    btnAddCategory.addEventListener("click", ActAddCategory);
}
