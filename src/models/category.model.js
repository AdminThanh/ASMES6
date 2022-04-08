import { getDatabase, ref, get, child, set, push, update, remove } from "firebase/database";
import database, { dbRef } from "../db.js"

export const getAllCategory = () => {
  return get(child(dbRef, `categories`))
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

export const deleteCategory = async (id) => {
  await remove(child(dbRef, `categories/${id}`));
}

export const addCategory = (data) => {
  console.log(data)
  const db = getDatabase();
  return push(ref(db, 'categories/'), data)
    .then((res) => {
      console.log("Thành công", res);
      return res.key
    })
    .catch((err) => {
      console.log("Lỗi", err)
      throw new Error("Lỗi khi thêm danh mục vào firebase");
    })
}

export const editCategory = async (key, data) => {
  await update(child(dbRef, `categories/${key}`), data)
  return true;
}

export const getCategoryId = (key) => {
  return get(child(dbRef, `categories/${key}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot;
      } else {
        throw new Error("No data available");
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
}