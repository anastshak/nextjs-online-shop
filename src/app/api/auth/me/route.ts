import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const accessToken = (await cookies()).get('accessToken')?.value;

  if (!accessToken) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const res = await fetch('https://dummyjson.com/auth/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  });

  if (!res.ok) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const user = await res.json();

  return NextResponse.json({ user });
}
