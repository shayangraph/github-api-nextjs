import { NextResponse } from "next/server";
import courses from "./data.json";

export async function GET(response) {
  return NextResponse.json(courses);
}
