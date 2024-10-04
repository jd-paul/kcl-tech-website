import { getMongoDb } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Db } from "mongodb";

export async function GET() {
  console.log("GET request made to /api/dbConnect");
  try {
    const db: Db = await getMongoDb();
    const data = await db
      .collection("opportunities")
      .find({ _id: 1 as any })
      .toArray();

    return NextResponse.json({ ...data });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const db: Db = await getMongoDb();
    const body = await request.json();

    const result = await db.collection("your_collection").insertOne(body);

    return NextResponse.json({
      message: "Data inserted successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const db: Db = await getMongoDb();
    const body = await request.json();

    const result = await db
      .collection("your_collection")
      .updateOne({ _id: 1 as any }, { $set: body });

    return NextResponse.json({
      message: "Data updated successfully",
      id: result.upsertedId,
    });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
