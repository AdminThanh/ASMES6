import "toastify-js/src/toastify.css"
import Toastify from "toastify-js"
export default class Shared {
  render = async (target, promiseFireBase, callback, additionalRender = '') => {
    const res = await promiseFireBase();
    const data = res.val();
    const result = Object.keys(res.val())
      .map((item) => {
        return callback(data[item], item);
      })
      .join("");
    // console.log(result)
    target.innerHTML = additionalRender + result;
  };

  toast = (msg, status) => {
    const color = (() => {
      switch (status) {
        case "success":
          return "linear-gradient(to right, #00b09b, #96c93d)";
        case "warning":
          return "linear-gradient(to right, #ffc107, #ffe29d)";
        case "danger":
          return "linear-gradient(to right, #dc3545, #de7b5f)";
        default:
          return "linear-gradient(to right, #00b09b, #96c93d)";
      }
    })();

    // Show toastify
    Toastify({
      text: msg,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: color,
      },
      onClick: function () { },
    }).showToast();
  };

}
