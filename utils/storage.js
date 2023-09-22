import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "@/config/firebase";
import path from "path";
import { v4 as uuid } from "uuid";

exports.upload = async (folder, file) => {
  const name = uuid();
  const fileName = name + path.extname(file.originalname);
  const imageRef = ref(storage, `${folder}/${fileName}`);
  const uploadPath = (await uploadBytes(imageRef, file.buffer)).ref.fullPath;
  return uploadPath;
};

exports.getUrl = async (filePath) => {
  const storageRef = ref(storage, filePath);
  const downloadUrl = await getDownloadURL(storageRef);
  return downloadUrl;
};
