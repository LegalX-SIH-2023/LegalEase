import { getFileStream } from "@/utils/storage";
import { NextResponse } from "next/server";

export const GET = async (req, { params: { folder, file } }) => {
  return new NextResponse(await getFileStream(`${folder}/${file}`));
};
