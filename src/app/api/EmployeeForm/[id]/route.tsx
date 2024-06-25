 
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request:any) {
  const { params } = request.nextUrl;

  console.log(params);

  // Returning a JSON response with a status code of 200
  return NextResponse.json(params, { status: 200 });
}