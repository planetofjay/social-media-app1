import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "./config";
import uuid from "react-uuid";

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export async function uploadPicture(file) {
  try {
    const storageRef = ref(storage, uuid() + '--' + file.name);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;  
  }
  catch {
    return null;
  }
}