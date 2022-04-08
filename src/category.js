import { getAllCategory, deleteCategory } from "./models/category.model.js";
import Shared from "./main.js";

const cateShared = new Shared();
const listCategory = document.querySelector("#listCategory");

const actCate = async () => {
    await cateShared.render(
        listCategory,
        getAllCategory,
        ({ name, id }, key) => {
            return `<tr>
            <td>
                <div class="checkbox d-inline-block">
                    <input type="checkbox" class="checkbox-input" id="checkbox2">
                    <label for="checkbox2" class="mb-0"></label>
                </div>
            </td>
            <td>${id}</td>
            <td>${name}</td>
            <td>
                <div class="d-flex align-items-center list-action">
                    <a class="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Sửa"
                        href="page-edit-category.html?key=${key}"><i class="ri-pencil-line mr-0"></i></a>
                    <a data-key="${key}" class="delCategory hover badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Xóa" ><i class="ri-delete-bin-line mr-0"></i></a>
                </div>
            </td>
        </tr>`;
        },
    );
    document.querySelectorAll(".delCategory").forEach((element) =>
        element.addEventListener("click", async (e) => {
            const key = element.dataset.key;
            await deleteCategory(key);
            e.target.parentNode.parentNode.parentNode.parentNode.remove();
            cateShared.toast("Xóa sản phẩm thành công!", "success");
        })
    )
}

if (listCategory) {
    actCate()
}

const list_category = document.querySelector("#list_category");

const getMenuCate = async () => {
    await cateShared.render(
        list_category,
        getAllCategory,
        ({ name, id }, key) => {
            return `<li><a href="product-grid.html?id=${id}">${name}</a></li>`;
        },
    );
}
if (list_category) {
    getMenuCate()
}