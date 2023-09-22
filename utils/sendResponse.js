import { NextResponse } from "next/server";

export const successResponse = (status, message, data) => {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    {
      status,
    }
  );
};

export const errorResponse = (
  status = 500,
  message = "Internal Server Error"
) => {
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
