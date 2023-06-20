import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('/api/contact', {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json()

    return NextResponse.json({ data })

}