import { getDatabase, ref, get, child, set, push, update, remove } from "firebase/database";
import database, { dbRef } from "../db.js"

export const getAllOrder = () => {
  return get(child(dbRef, `orders`))
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

export const editOrder = async (key, data) => {
  await update(child(dbRef, `orders/${key}`), data)
  return true;
}