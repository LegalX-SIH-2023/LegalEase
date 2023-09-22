import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import storage from "@/config/firebase";
import { v4 as uuid } from "uuid";

export const upload = async (folder, fileOriginalName, fileBuffer) => {
  let fileExtension = fileOriginalName.toString().split(".");
  fileExtension =
    fileExtension.length > 1
      ? "." + fileExtension[fileExtension.length - 1]
      : "";
  const randomName = uuid();
  const fileName = randomName + "-" + Date.now() + fileExtension;
  const imageRef = ref(storage, `${folder}/${fileName}`);
  const uploadPath = (await uploadBytes(imageRef, fileBuffer)).ref.fullPath;
  return uploadPath;
};

export const getUrl = async (filePath) => {
  const storageRef = ref(storage, filePath);
  const downloadUrl = await getDownloadURL(storageRef);
  return downloadUrl;
};
