import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Mulya Bazzar',
  description: 'Read our Terms of Service to understand the rules and guidelines for using our platform.',
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
