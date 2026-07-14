'use client';

import { useEffect, useState } from 'react';

const navItems = [
  ['About', '#about'],
  ['Stack', '#stack'],
  ['프로젝트', '#projects'],
  ['경험&수상', '#experience'],
  ['연락처', '#contact']
];

function HeaderMarkup({ className, isHidden = false }) {
  return (
    <header
      className={className}
      aria-label="페이지 바로가기"
      aria-hidden={isHidden || undefined}
      inert={isHidden ? true : undefined}
    >
      <nav className="partNav" aria-label="주요 섹션">
        {navItems.map(([label, href]) => (
          <a href={href} key={href}>{label}</a>
        ))}
      </nav>
    </header>
  );
}

export default function SiteHeader() {
  const [isBodyHeaderVisible, setIsBodyHeaderVisible] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const about = document.getElementById('about');
      const triggerPoint = about ? about.offsetTop - 1 : window.innerHeight;

      setIsBodyHeaderVisible(window.scrollY >= triggerPoint);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('resize', updateHeader);

    return () => {
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('resize', updateHeader);
    };
  }, []);

  return (
    <>
      <HeaderMarkup className="siteNav heroNav" />
      <HeaderMarkup
        className={`siteNav bodyNav${isBodyHeaderVisible ? ' isVisible' : ''}`}
        isHidden={!isBodyHeaderVisible}
      />
    </>
  );
}
