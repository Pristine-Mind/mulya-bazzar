'use client';

import dynamic from 'next/dynamic';

const PrivacyPolicy = dynamic(
  () => import('@/app/components/PrivacyPolicy'),
  { ssr: false }
);

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
