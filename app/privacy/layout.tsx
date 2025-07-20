import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Mulya Bazzar',
  description: 'Learn how we collect, use, and protect your personal information in our Privacy Policy.',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
