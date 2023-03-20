import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./config";

export async function load() {

  try {
    const querySnapshot = await getDocs(collection(db, "posts"));

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id
      });
    });

    return data;
  }
  catch (error) {
    throw new Error('Failed to load the database.');
  }

}

export async function loadPromoted() {

  const q = query(collection(db, "posts"), where("promote", "==", true));
  const querySnapshot = await getDocs(q);

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      ...doc.data(),
      id: doc.id
    });
  });

  return data;

}

export function loadById(id) {

  console.log('Load Id: ', id);

}