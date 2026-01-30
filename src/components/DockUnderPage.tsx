'use client';

import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Home, BookOpen, User, Download } from 'lucide-react';
import Dock from './Dock';

export function DockUnderPage() {
  const router = useRouter();
  const items = useMemo(
    () => [
      { icon: <Home size={18} />, label: 'Home', onClick: () => router.push('/') },
      { icon: <BookOpen size={18} />, label: 'Learn', onClick: () => router.push('/learn') },
      { icon: <User size={18} />, label: 'Profile', onClick: () => router.push('/about') },
      {
        icon: <Download size={18} />,
        label: 'Download CV',
        onClick: () => router.push('/TruongNguyen_SeniorFrontendEngineer_Resume.pdf'),
      },
    ],
    [router]
  );

  return <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />;
}
