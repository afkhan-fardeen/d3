import Image from 'next/image';

interface PlaceholderImageProps {
  src?: string;
  alt: string;
  width: number;
  height: number;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  objectFit?: 'cover' | 'contain';
}

// 10x10 blurred gray base64 for blurDataURL
const BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABdJREFUeNpi/P//PwMpgImBQmqIAAIMABFiAygRo+7PAAAAAElFTkSuQmCC';

export function PlaceholderImage({
  src,
  alt,
  width,
  height,
  label,
  className = '',
  style,
  priority = false,
  objectFit = 'cover',
}: PlaceholderImageProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        style={{
          width: '100%',
          height: '100%',
          objectFit,
          ...style,
        }}
        className={className}
      />
    );
  }

  // Render styled placeholder when no real image yet
  return (
    <div
      className={`img-placeholder ${className}`}
      style={{
        width: '100%',
        aspectRatio: `${width} / ${height}`,
        position: 'relative',
        flexDirection: 'column',
        gap: 8,
        ...style,
      }}
      role="img"
      aria-label={alt}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--border)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      {label && (
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
