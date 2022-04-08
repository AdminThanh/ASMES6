import { getAllProduct, deleteProduct, getProductNew, getProductTop } from "./models/product.model.js";
import Shared from "./main.js";

const productShared = new Shared();
const listProduct = document.querySelector("#listProduct");

const action = async () => {
    await productShared.render(
        listProduct,
        getAllProduct,
        ({ name, price, detail, image, categorieId, id, import_date }, key) => {
            return `<tr>
    <td>
        <div class="checkbox d-inline-block">
            <input type="checkbox" class="checkbox-input" id="checkbox2">
            <label for="checkbox2" class="mb-0"></label>
        </div>
    </td>
    <td>
        <div class="d-flex align-items-center">
            <img src="${image}"
                class="img-fluid rounded avatar-50 mr-3" alt="image">
            <div>${name}</div>
        </div>
    </td>
    <td id="description">${truncate(detail)}</td>
    <td>${price}</td>
    <td>${categorieId}</td>
    <td>
        <div class="d-flex align-items-center list-action">
            <a class="badge bg-success mr-2" data-toggle="tooltip"
                data-placement="top" title="" data-original-title="Sửa" href="page-edit-product.html?id=${key}"><i
                    class="ri-pencil-line mr-0"></i></a>
            <a data-key="${key}" class="deleteProduct badge bg-warning mr-2" data-toggle="tooltip"
                data-placement="top" title="" data-original-title="Xóa"><i
                    class="ri-delete-bin-line mr-0"></i></a>
        </div>
    </td>
</tr>`;
        },
    );
    document.querySelectorAll(".deleteProduct").forEach((element) =>
        element.addEventListener("click", async (e) => {
            const key = element.dataset.key;
            await deleteProduct(key);
            e.target.parentNode.parentNode.parentNode.parentNode.remove();
            productShared.toast("Xóa sản phẩm thành công!", "success");
        })
    )
}

if (listProduct) {
    action()
}

// ======================= Client =======================
// PRODUCT NEW
const listProductNew = document.querySelector("#list_product_new");
const actGetProductNew = () => {
    productShared.render(
        listProductNew,
        getProductNew,
        ({ name, price, detail, image, categorieId, id, import_date }, key) => {
            return `<div class="col-md-4 col-lg-3 col-sm-4 col-xs-12">
            <div class="category">
                <div class="ht__cat__thumb">
                    <a href="product-details.html?keyProduct=${id}">
                        <img src="${image}" alt="product images">
                    </a>
                </div>
                <div class="fr__hover__info">
                    <ul class="product__action">
                        <li><a href="wishlist.html"><i class="icon-heart icons"></i></a></li>
                        <li onclick="addCart(${id},'${name}',${price},'${image}')"><a><i class="icon-handbag icons"></i></a></li>
                        <li><a href="#"><i class="icon-shuffle icons"></i></a></li>
                    </ul>
                </div>
                <div class="fr__product__inner">
                    <h4><a href="product-details.html">${name}</a></h4>
                    <ul class="fr__pro__prize">
                        <li>${formatVND(price)}</li>
                    </ul>
                </div>
            </div>
        </div>`;
        },
    );
}

if (listProductNew) {
    actGetProductNew();
}

// PRODUCT BÁN CHẠY
const list_product_best = document.querySelector("#list_product_best");

const actGetProductTop = () => {
    productShared.render(
        list_product_best,
        getProductTop,
        ({ name, price, detail, image, categorieId, id, import_date }, key) => {
            return `<div class="col-md-4 col-lg-3 col-sm-4 col-xs-12">
            <div class="category">
                <div class="ht__cat__thumb">
                    <a href="product-details.html?keyProduct=${id}">
                        <img src="${image}" alt="product images">
                    </a>
                </div>
                <div class="fr__hover__info">
                    <ul class="product__action">
                        <li><a href="wishlist.html"><i class="icon-heart icons"></i></a></li>
                        <li onclick="addCart(${id},'${name}',${price},'${image}')"><a><i class="icon-handbag icons"></i></a></li>
                        <li><a href="#"><i class="icon-shuffle icons"></i></a></li>
                    </ul>
                </div>
                <div class="fr__product__inner">
                    <h4><a href="product-details.html">${name}</a></h4>
                    <ul class="fr__pro__prize">
                        <li>${formatVND(price)}</li>
                    </ul>
                </div>
            </div>
        </div>`;
        },
    );
}

if (list_product_best) {
    actGetProductTop();
}