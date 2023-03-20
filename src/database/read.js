import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./config";

export function load() {

  console.log('Loading...');

  const data = [];

  const dbCollection = collection(db, "posts");
  getDocs(dbCollection)
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const post = {
          ...doc.data(),
          id: doc.id
        };
        data.push(post);
      });
      console.log('Data:', data);
    })
    .catch((error) => {
      console.log('Error:', error);
    });

  // const querySnapshot = await getDocs(collection(db, "users"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });

  return data;

}

export function loadById(id) {

  console.log('Load Id: ', id);

}