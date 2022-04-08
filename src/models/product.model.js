import { getDatabase, ref, get, child, set, push, update, remove } from "firebase/database";
import database, { dbRef } from "../db.js"

export const getAllProduct = () => {
  return get(child(dbRef, `products`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot;
      } else {
        throw new Error("No data available");
      }
    })
    .catch((error) => {
      throw new Error(error)
    });
};

export const getProductNew = () => {
  return get(child(dbRef, `products`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot;
      } else {
        throw new Error("No data available");
      }
    })
    .catch((error) => {
      throw new Error(error)
    });
};

export const getProductTop = () => {
  return get(child(dbRef, `products`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot;
      } else {
        throw new Error("No data available");
      }
    })
    .catch((error) => {
      throw new Error(error)
    });
};

export const addProduct = (data) => {
  console.log(data)
  const db = getDatabase();
  return push(ref(db, 'products/'), data)
    .then((res) => {
      console.log("Thành công", res);
      return res.key
    })
    .catch((err) => {
      console.log("Lỗi", err)
      throw new Error("Lỗi khi thêm sản phẩm vào firebase");
    })
}

export const editProduct = async (key, data) => {
  await update(child(dbRef, `products/${key}`), data)
  return true;
}

export const deleteProduct = async (id) => {
  await remove(child(dbRef, `products/${id}`));
}

export const getProductId = (key) => {
  // const db = getDatabase();
  return get(child(dbRef, `products/${key}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot;
      } else {
        throw new Error("No data available");
      }
    })
    .catch((error) => {
      throw new Error(error)
    });
}


