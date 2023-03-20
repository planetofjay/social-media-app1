import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./config";

export function load() {

  console.log('Loading...');

  const dbCollection = collection(db, "posts");
  getDocs(dbCollection)
    .then((querySnapshot) => {
      console.log('Query Snapshot:', querySnapshot);
    })
    .catch((error) => {
      console.log('Error:', error);
    });

  // const querySnapshot = await getDocs(collection(db, "users"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });

}

export function loadById(id) {

  console.log('Load Id: ', id);

}