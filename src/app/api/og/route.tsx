import { ImageResponse } from 'next/og';
import { OG_IMAGE, SITE } from '@/lib/constants';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Blog Post';

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: OG_IMAGE.BACKGROUND }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '60px', width: '100%' }}>
          <div style={{ fontSize: 72, fontWeight: 600, color: OG_IMAGE.TITLE_COLOR, lineHeight: 1.2, marginBottom: '20px', fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>{title}</div>
          <div style={{ fontSize: 32, color: OG_IMAGE.SUBTITLE_COLOR, fontFamily: 'Georgia, serif' }}>{SITE.DOMAIN}</div>
        </div>
      </div>
    ),
    { width: OG_IMAGE.WIDTH, height: OG_IMAGE.HEIGHT }
  );
}
