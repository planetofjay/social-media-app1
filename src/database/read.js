import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./config";

export async function load() {

    return 'ok';

}

export function loadById(id) {

  console.log('Load Id: ', id);

}