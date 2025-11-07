import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Blog Post';

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: '#eeece2' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '60px', width: '100%' }}>
          <div style={{ fontSize: 72, fontWeight: 600, color: '#3d3929', lineHeight: 1.2, marginBottom: '20px', fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>{title}</div>
          <div style={{ fontSize: 32, color: '#6b6656', fontFamily: 'Georgia, serif' }}>anuragkanade.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
