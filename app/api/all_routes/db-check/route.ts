import { NextResponse } from "next/server";
import { connectDB } from "@/config/db_conn";

export async function GET() {
  try {
    await connectDB(); // Connect to MongoDB

    return NextResponse.json({
      status: "success",
      message: "MongoDB connected successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: "Failed to connect to MongoDB.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
