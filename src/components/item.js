import Link from 'next/link';

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

export const NavItem = ({ icon, title, subtitle, action }) => (
  <div onClick={action}>
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
  </div>
);

export const Avatar = ({
  action,
  loading,
  image,
  isChangeable,
  transparent,
  icon,
  title,
  subtitle
}) => (
  <div className="storeAvatar">
    <div>
      {!loading ? (
        <img alt="logo" className="storeAvatarImage" src={!image ? '' : image} />
      ) : (
        <div className="storeAvatarImage">carregando</div>
      )}
      {isChangeable && !loading && <div className="buttonFloat">edit</div>}
    </div>
    <div className="storeAvatarContent">
      {title === '' || title === undefined ? (
        <div className="titleHide"></div>
      ) : (
        <h4
          style={{
            marginBottom: 0,
            fontSize: `${30 - title.length * 0.3}px`,
            lineHeight: `${30 - title.length * 0.3}px`
          }}>
          {title}
        </h4>
      )}
      {!subtitle ? <div className="textHide"></div> : <p>{subtitle}</p>}
    </div>
  </div>
);

export const CardItem = ({ action, image, title, price, children }) => (
  <div className="cardItem" onClick={action}>
    {image && <img src={image} alt={title} />}
    {title && (
      <div className="content">
        <h5 className="cardTitle">{title}</h5>
        {price && <h6 className="price">{price}</h6>}
      </div>
    )}
    {children}
  </div>
);
