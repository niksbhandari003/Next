import { NextRequest, NextResponse } from 'next/server';

export async function GET()
{
    return NextResponse.json('HI', { status: 200 });
}