import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
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
      <button
        type="button"
        className="toggleNav"
        onClick={() => setIsActived(!isActived)}
      >
        &#9776;
      </button>
      <div className="container">
        <Link href="/">
          <span className="logo">
            <img src="/images/logo-carpede.png" alt="Carpede" title="Carpede" />
          </span>
        </Link>
        <nav className={isActived ? 'active' : 'null'}>
          <Link href="/">
            <span>INÍCIO</span>
          </Link>
          <Link href="/support">
            <span>SUPORTE</span>
          </Link>
          <Link href="/terms">
            <span>TERMOS</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
