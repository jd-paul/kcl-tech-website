import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  // Define the database connection details using types
  const host_name: string = process.env.DB_HOST!;
  const database: string = process.env.DB_NAME!;
  const user_name: string = process.env.DB_USER!;
  const password: string = process.env.DB_PASSWORD!;

  console.log("host_name: ", host_name);
  console.log("database: ", database);
  console.log("user_name: ", user_name);
  console.log("password: ", password);

  try {
    // Create a MySQL connection using the mysql2/promise library with TypeScript
    const connection = await mysql.createConnection({
      host: host_name,
      user: user_name,
      password: password,
      database: database,
      port: 3306,
    });

    // Execute a simple query to test the connection
    const [rows] = await connection.execute("SELECT 1");

    // Close the connection
    await connection.end();

    // Return a successful response with the result
    return NextResponse.json({
      message: "Connection to MySQL server successfully established.",
      rows: rows,
    });
  } catch (error: any) {
    // Handle errors by returning a failure response
    return NextResponse.json(
      {
        message: "Failed to connect to MySQL",
        error: error,
      },
      { status: 500 }
    );
  }
}
