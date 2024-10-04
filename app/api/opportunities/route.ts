import { getMongoDb } from "@/app/lib/mongodb";
import { Db } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("GET request made to /api/opportunities");
  try {
    const db: Db | undefined = await getMongoDb();
    const data = await db!.collection("opportunities").find({}).toArray();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
