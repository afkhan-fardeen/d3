import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  // Allow local network access for mobile testing
  allowedDevOrigins: ['192.168.3.26', '192.168.1.*', '10.0.0.*', '172.16.*'],
};

export default withNextIntl(nextConfig);
