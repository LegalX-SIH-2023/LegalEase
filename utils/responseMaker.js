import { NextResponse } from "next/server";

export default (status, success, message, data) => {
  return NextResponse.json(
    {
      success,
      message,
      data,
    },
    {
      status,
    }
  );
};
