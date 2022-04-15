import { getDatabase, ref, get, child, set, push, update, remove } from "firebase/database";
import database, { dbRef } from "../db.js"

export const addOrder = (data) => {
    const db = getDatabase();
    return push(ref(db, "orders/"), data)
      .then((res) => {
        console.log("Thành công", res);
        return res.key;
      })
      .catch((err) => {
        console.log("Lỗi", err);
        throw new Error("Lỗi khi thêm sản phẩm vào firebase");
      });
  };
