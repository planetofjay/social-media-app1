import { getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "./config";

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

function uploadPicture() {
  const storageRef = ref(storage, 'some-child');

  // 'file' comes from the Blob or File API
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
}