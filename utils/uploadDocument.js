import { upload } from "./storage";
import Document from "@/models/document";

export default async (name, file, folder) => {
  let fileBytes = await file.arrayBuffer();
  let fileBuffer = Buffer.from(fileBytes);

  const filePath = await upload(folder, file.name, fileBuffer);
  console.log(filePath);

  const fileDocument = await Document.create({
    name: name,
    path: filePath,
    size: fileBuffer.length,
  });

  return fileDocument._id;
};
