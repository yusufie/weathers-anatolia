import { NextResponse } from 'next/server';
import connectDB from '../utils/connectDB';

export async function GET() {
  const data = await connectDB();

  return NextResponse.json(data);
}
