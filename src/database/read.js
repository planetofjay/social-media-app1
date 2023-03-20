import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./config";

/**
 * Loads all documents from the Posts collection.
 * 
 * @returns 
 *    Array with the posts.
 */
export async function load() {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    return processQuerySnapshot(querySnapshot);
  }
  catch (error) {
    throw new Error('Failed to load the database.');
  }
}

/**
 * Loads all promoted documents from the Posts collection.
 * 
 * @returns 
 *    Array with the posts.
 */
export async function loadPromoted() {
  const q = query(collection(db, "posts"), where("promote", "==", true));
  const querySnapshot = await getDocs(q);
  return processQuerySnapshot(querySnapshot);
}

/**
 * Converts a Firebase query snapshot into an array.
 * 
 * @param {object} querySnapshot 
 *    The query snapshot returned by Firebase.
 * @returns 
 *    Array with the data.
 */
function processQuerySnapshot(querySnapshot) {
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