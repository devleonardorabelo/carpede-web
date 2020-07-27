import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
    const [isActived, setIsActived] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    
    return (
      <header className={scrollPosition > 0 && "scrolled"}>
          <button className="toggleNav" onClick={() => setIsActived(!isActived)}>&#9776;</button>
          <div className="container">
              <a className="logo" href=""><img src="/images/logo-carpede.png" alt="Carpede" title="Carpede" /></a>
              <nav className={isActived && "active"}>
                <Link href="/"><a>INÍCIO</a></Link>
                <Link href="/support"><a>SUPORTE</a></Link>
                <Link href="/terms"><a>TERMOS</a></Link> 
              </nav>
          </div>
      </header>
    )
}