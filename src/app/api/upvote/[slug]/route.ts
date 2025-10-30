import { NextRequest, NextResponse } from 'next/server';
import { incrementUpvotes, getUpvotes } from '@/lib/supabase';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const upvotes = await incrementUpvotes(slug);
    return NextResponse.json({ upvotes }, { status: 200 });
  } catch (error) {
    console.error('Error incrementing upvotes:', error);
    return NextResponse.json(
      { error: 'Failed to increment upvotes' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const upvotes = await getUpvotes(slug);
    return NextResponse.json({ upvotes }, { status: 200 });
  } catch (error) {
    console.error('Error fetching upvotes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch upvotes' },
      { status: 500 }
    );
  }
}
