import { collection, getDocs } from "firebase/firestore"; 
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
  catch(error) {
    throw 'Failed to load the database.';
  }

}

export function loadById(id) {

  console.log('Load Id: ', id);

}