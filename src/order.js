import { getAllOrder, getOrderId, editOrder } from "./models/order.model.js";
import { getData } from "./models/product.model.js";
import Shared from "./main.js";

const productShared = new Shared();
const listOrder = document.querySelector("#listOrder");

const getOrderData = async () => {
    await productShared.render(
        listOrder,
        getAllOrder,
        ({ customer_name, customer_phone_number, customer_address, created_date, status }, key) => {
            return `<tr>
            <td>
                <div class="checkbox d-inline-block">
                    <input type="checkbox" class="checkbox-input" id="checkbox2">
                    <label for="checkbox2" class="mb-0"></label>
                </div>
            </td>
            <td>${customer_name}</td>
            <td>${customer_phone_number}</td>
            <td id="description">${customer_address}</td>
            <td>${created_date}</td>
            <td>${status}</td>
            <td>
                <div class="d-flex align-items-center list-action">
                    <a class="badge badge-info mr-2" data-toggle="tooltip"
                        data-placement="top" title="" data-original-title="Xem" href="page-view-order?idOrder=${key}"><i
                            class="ri-eye-line mr-0"></i></a>
                    <a class="badge bg-success mr-2" data-toggle="tooltip"
                        data-placement="top" title="" data-original-title="Sửa"
                        href="page-edit-order?keyOrderEdit=${key}"><i
                            class="ri-pencil-line mr-0"></i></a>
                </div>
            </td>
        </tr>`;
        },
    );
}

if (listOrder) {
    getOrderData();
}

// View order
const url = new URL(window.location.href);
const idOrder = url.searchParams.get("idOrder");
const getOrderDataId = async () => {
    const listOrderDetail = document.querySelector("#listOrderDetail");
    var resultPrice = 0;
    if (listOrderDetail) {
        const data = await getData(
            `https://asmfull-6ff42-default-rtdb.firebaseio.com/orders/${idOrder}.json`
        );
        console.log(data.listProduct)
        const html = Object.keys(data.listProduct)
            .map((key) => {
                if (data.listProduct[key] === null) return "";
                const product = data.listProduct[key];
                resultPrice += product.price * product.quantity;
                return `<tr>
                <td>
                    <div class="checkbox d-inline-block">
                        <input type="checkbox" class="checkbox-input" id="checkbox2">
                        <label for="checkbox2" class="mb-0"></label>
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${product.image}"
                            class="img-fluid rounded avatar-50 mr-3" alt="image">
                        <div>${product.name}</div>
                    </div>
                </td>
                <td>${formatVND(product.price)}</td>
                <td>${product.quantity}</td>
                <td class="price priceAll">${formatVND(product.price * product.quantity)}</td>
            </tr>`;
            })
            .join("");
        document.getElementById('price_total').innerHTML = formatVND(resultPrice);

        listOrderDetail.innerHTML = html;
    }
};
if (idOrder) {
    getOrderDataId();
}


// Edit order

const keyOrderEdit = url.searchParams.get("keyOrderEdit");

const getEditOrder = async () => {
    var resultPrice = 0;
    const data = await getData(
        `https://asmfull-6ff42-default-rtdb.firebaseio.com/orders/${keyOrderEdit}.json`
    );
    document.querySelector(".customer_name").innerHTML = data.customer_name;
    document.querySelector(".customer_address").innerHTML = data.customer_address;
    document.querySelector(".customer_phone_number").innerHTML = data.customer_phone_number;
    document.querySelector(".created_date").innerHTML = data.created_date;
    const status = document.querySelector(".status");
    const option = `<option value="Đang xác nhận">Đang xác nhận</option>
        <option value="Đang giao">Đang giao</option>
        <option value="Đã nhận" selected >Đã nhận</option>
        <option value="Đã hủy">Đã hủy</option>`;

    const options = ["Đang xác nhận", "Đang giao", "Đã nhận", "Đã hủy"];
    options.forEach(element => {
        if (data.status == element) {
            status.innerHTML += `<option selected value="${element}">${element}</option>`;
        } else {
            status.innerHTML += `<option value="${element}">${element}</option>`;
        }
    });
};
if (keyOrderEdit) {
    getEditOrder();
}

const btnEditOrder = document.querySelector("#btnEditOrder");

const editOrderAct = (e) => {
    e.preventDefault();
    const status = document.querySelector("#status").value;
    const result = editOrder(keyOrderEdit, {
        status: status
    });
    if (result) {
        productShared.toast("Cập nhật trạng thái thành công!", "success");
    } else {
        productShared.toast("Cập nhật trạng thái thất bại!", "danger");
    }
};
if(btnEditOrder){
    btnEditOrder.addEventListener("click", editOrderAct)
}