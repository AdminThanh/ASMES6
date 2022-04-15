import { getAllProduct, getProductCateId, getData, deleteProduct, getProductNew, getProductTop } from "./models/product.model.js";
import { getAllCategory } from "./models/category.model.js";
import Shared from "./main.js";
import { async } from "@firebase/util";

const productShared = new Shared();

const productAll = document.querySelector("#grid-view");

// Get danh sách sp
const actGetProductGrid = () => {
    productShared.render(
        productAll,
        getAllProduct,
        ({ name, price, detail, image, categorieId, id, import_date }, key) => {
            return `<div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
            <div class="category">
                <div class="ht__cat__thumb">
                    <a href="product-details?keyProduct=${id}">
                        <img src="${image}" alt="product images">
                    </a>
                </div>
                <div class="fr__hover__info">
                    <ul class="product__action">
                        <li><a href="wishlist.html"><i class="icon-heart icons"></i></a>
                        </li>

                        <li onclick="addCart(${id},'${name}',${price},'${image}')"><a ><i class="icon-handbag icons"></i></a>
                        </li>

                        <li><a href="#"><i class="icon-shuffle icons"></i></a></li>
                    </ul>
                </div>
                <div class="fr__product__inner">
                    <h4><a href="product-details?keyProduct=${id}">${name}</a></h4>
                    <ul class="fr__pro__prize">
                        <li>${formatVND(price)}</li>
                    </ul>
                </div>
            </div>
        </div>`;
        },
    );
    // const nameCateTitle = document.querySelector("#nameCateTitle");
    // if (nameCateTitle) {
    //     nameCateTitle.innerHTML = "Tất cả sản phẩm";
    // }
}


// Product ALL
const renderListProduct = async () => {
    const listElement = document.querySelector(".productAll");
    if (listElement) {
        const data = await getData(
            "https://asmfull-6ff42-default-rtdb.firebaseio.com/products.json"
        );
        console.log(data)
        const html = Object.keys(data)
            .map((key) => {
                if (data[key] === null) return "";
                const product = data[key];
                return `<div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                <div class="category">
                    <div class="ht__cat__thumb">
                        <a href="product-details?keyProduct=${key}">
                            <img src="${product.image}" alt="product images">
                        </a>
                    </div>
                    <div class="fr__hover__info">
                        <ul class="product__action">
                            <li><a href="wishlist.html"><i class="icon-heart icons"></i></a>
                            </li>
    
                            <li onclick="addCart(${product.id},'${product.name}',${product.price},'${product.image}')"><a ><i class="icon-handbag icons"></i></a>
                            </li>
    
                            <li><a href="#"><i class="icon-shuffle icons"></i></a></li>
                        </ul>
                    </div>
                    <div class="fr__product__inner">
                        <h4><a href="product-details?keyProduct=${key}">${product.name}</a></h4>
                        <ul class="fr__pro__prize">
                            <li>${formatVND(product.price)}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
            })
            .join("");
        const nameCateTitle = document.querySelector("#nameCateTitle");
        if (nameCateTitle) {
            nameCateTitle.innerHTML = "Tất cả sản phẩm";
        }
        listElement.innerHTML = html;
    }
};

const actGetProductCate = async (keyCate) => {
    const listElement = document.querySelector(".productAll");
    if (listElement) {
        const data = await getData(
            `https://asmfull-6ff42-default-rtdb.firebaseio.com/products.json`
        );
        console.log(data)
        const data_filter = Object.values(data).filter(user => user.categorieId == keyCate);
        console.log(data_filter)
        const html = Object.keys(data_filter).reverse()
            .map((key) => {
                if (data_filter[key] === null) return "";
                const product = data_filter[key];
                return `<div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                <div class="category">
                    <div class="ht__cat__thumb">
                        <a href="product-details?keyProduct=${key}">
                            <img src="${product.image}" alt="product images">
                        </a>
                    </div>
                    <div class="fr__hover__info">
                        <ul class="product__action">
                            <li><a href="wishlist.html"><i class="icon-heart icons"></i></a>
                            </li>
    
                            <li onclick="addCart(${product.id},'${product.name}',${product.price},'${product.image}')"><a ><i class="icon-handbag icons"></i></a>
                            </li>
    
                            <li><a href="#"><i class="icon-shuffle icons"></i></a></li>
                        </ul>
                    </div>
                    <div class="fr__product__inner">
                        <h4><a href="product-details?keyProduct=${key}">${product.name}</a></h4>
                        <ul class="fr__pro__prize">
                            <li>${formatVND(product.price)}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
            })
            .join("");
        const nameCateTitle = document.querySelector("#nameCateTitle");
        if (nameCateTitle) {
            nameCateTitle.innerHTML = "Danh mục sản phẩm";
        }
        listElement.innerHTML = html;
    }
};

const actGetProductCate1 = async (keyCate) => {
    const listElement = document.querySelector(".productAll");
    if (listElement) {
        const data = await getData(
            "https://asmfull-6ff42-default-rtdb.firebaseio.com/products.json"
        );
        var data_filter = data.filter(element => element.categorieId == keyCate)
        console.log(data_filter)
        const list = data_filter.forEach(product => {
            const dataList = `<div class="col-md-4 col-lg-4 col-sm-6 col-xs-12">
            <div class="category">
                <div class="ht__cat__thumb">
                    <a href="product-details?keyProduct=${key}">
                        <img src="${product.image}" alt="product images">
                    </a>
                </div>
                <div class="fr__hover__info">
                    <ul class="product__action">
                        <li><a href="wishlist.html"><i class="icon-heart icons"></i></a>
                        </li>

                        <li onclick="addCart(${product.id},'${product.name}',${product.price},'${product.image}')"><a ><i class="icon-handbag icons"></i></a>
                        </li>

                        <li><a href="#"><i class="icon-shuffle icons"></i></a></li>
                    </ul>
                </div>
                <div class="fr__product__inner">
                    <h4><a href="product-details?keyProduct=${product.id}">${product.name}</a></h4>
                    <ul class="fr__pro__prize">
                        <li>${formatVND(product.price)}</li>
                    </ul>
                </div>
            </div>
        </div>`;
            const nameCateTitle = document.querySelector("#nameCateTitle");
            if (nameCateTitle) {
                nameCateTitle.innerHTML = "Tất cả sản phẩm";
            }
            listElement.innerHTML += dataList;
        });
    }
}

const url = new URL(window.location.href);
const categorieId = url.searchParams.get("keyCate");

if (categorieId) {
    actGetProductCate(categorieId);
}
else {
    // actGetProductGrid();
    renderListProduct();
}


// Danh mục Grid
const cateMenu = document.querySelector("#cateMenu");

const getMenuCateGrid = async () => {
    await productShared.render(
        cateMenu,
        getAllCategory,
        ({ name, id }, key) => {
            return `<li><a href="product-grid?keyCate=${id}">${name}</a></li>`;
        },
    );
}
if (cateMenu) {
    getMenuCateGrid()
}
