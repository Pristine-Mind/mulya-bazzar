'use client';

import dynamic from 'next/dynamic';

const TermsOfService = dynamic(
  () => import('@/app/components/TermsOfService'),
  { ssr: false }
);

export default function TermsPage() {
  return <TermsOfService />;
}
