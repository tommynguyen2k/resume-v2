import { ImageResponse } from 'next/og'

export const alt = 'Tommy Nguyen | Senior Frontend Engineer Portfolio'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          background: '#09090b',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient glow */}
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(236,72,153,0.1) 50%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Top badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(168,85,247,0.15)',
            border: '1px solid rgba(168,85,247,0.4)',
            borderRadius: '100px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#a855f7',
            }}
          />
          <span
            style={{
              color: '#c084fc',
              fontSize: '18px',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            Senior Frontend Engineer · 5+ Years
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '80px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '16px',
          }}
        >
          Tommy Nguyen
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '28px',
            color: '#a1a1aa',
            lineHeight: 1.5,
            maxWidth: '800px',
            marginBottom: '48px',
          }}
        >
          Building scalable web apps with React, Next.js, Angular & TypeScript
        </div>

        {/* Tech badges */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand'].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '8px',
                  padding: '8px 18px',
                  color: '#d4d4d8',
                  fontSize: '20px',
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ),
          )}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            right: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#a855f7',
            }}
          />
          <span
            style={{
              color: '#71717a',
              fontSize: '20px',
            }}
          >
            sr-fe-portfolio.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
