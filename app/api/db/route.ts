import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
    // Define the database connection details using types
    const host_name: string = process.env.NEXT_PUBLIC_DB_HOST!;
    const database: string = process.env.NEXT_PUBLIC_DB_NAME!;
    const user_name: string = process.env.NEXT_PUBLIC_DB_USER!;
    const password: string = process.env.NEXT_PUBLIC_DB_PASSWORD!;

    try {
        // Create a MySQL connection using the mysql2/promise library with TypeScript
        const connection = await mysql.createConnection({
            host: host_name,
            user: user_name,
            password: password,
            database: database,
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