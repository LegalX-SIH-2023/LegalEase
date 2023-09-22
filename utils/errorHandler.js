import { NextResponse } from "next/server";

export default (status = 500, message = "Internal Server Error") => {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    {
      status,
    }
  );
};
