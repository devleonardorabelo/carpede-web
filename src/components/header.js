/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isActived, setIsActived] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrollPosition > 0 ? 'site scrolled' : 'site'}>
      <button className="toggleNav" onClick={() => setIsActived(!isActived)}>
        &#9776;
      </button>
      <div className="container">
        <Link href="/site/">
          <a className="logo">
            <img src="/images/logo-carpede.png" alt="Carpede" title="Carpede" />
          </a>
        </Link>
        <nav className={isActived ? 'active' : 'null'}>
          <Link href="/site/">
            <a>INÍCIO</a>
          </Link>
          <Link href="/site/support">
            <a>SUPORTE</a>
          </Link>
          <Link href="/site/terms">
            <a>TERMOS</a>
          </Link>
          <Link href="/account/signin">
            <a>ENTRAR</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export const HeaderApp = ({ iconLeft, actionLeft, children }) => (
  <header className="app">
    <button className="icon" onClick={actionLeft}>
      {iconLeft}
    </button>
    {children}
  </header>
);