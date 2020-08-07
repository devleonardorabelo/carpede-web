import Link from 'next/link';

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

export const NavItem = ({ icon, title, subtitle, action }) => (
  <Link href={action}>
    <div className="navItem">
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div className="icon">{icon}</div>
        <div className="navItemContent">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
      <div className="arrow">
        <FiChevronRight />
      </div>
    </div>
  </Link>
);
