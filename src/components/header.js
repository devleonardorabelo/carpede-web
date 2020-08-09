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
        <Link href="/">
          <a className="logo">
            <img src="/images/logo-carpede.png" alt="Carpede" title="Carpede" />
          </a>
        </Link>
        <nav className={isActived ? 'active' : 'null'}>
          <Link href="/">
            <a>INÍCIO</a>
          </Link>
          <Link href="/support">
            <a>SUPORTE</a>
          </Link>
          <Link href="/terms">
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

export const HeaderApp = ({ iconLeft, actionLeft, iconRight, actionRight, children }) => (
  <header className="app">
    <a className="icon" onClick={actionLeft}>
      {iconLeft}
    </a>
    <a className="icon" onClick={actionRight}>
      {iconRight}
    </a>
  </header>
);
