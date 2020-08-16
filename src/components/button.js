import React from 'react';
import { MdFilterList } from 'react-icons/md';

export const NavigationButton = ({ title, action, active }) => (
  <button
    style={
      active
        ? { background: `linear-gradient(252.26deg, #4F8FDF 0%, #45D9A6 100%)`, color: '#FFFFFF' }
        : { background: '#E2E2E2', color: '#333333' }
    }
    onClick={action}>
    {title}
  </button>
);
export const FilterButton = ({ icon, action, badge }) => (
  <button className="filterButton" onClick={action}>
    <MdFilterList />
  </button>
);
export const CircularButton = ({ icon, action, style }) => (
  <button className="circularButton" onClick={action} style={style}>
    {icon}
  </button>
);
export const Button = ({ title, action, disabled, status }) => (
  <button className="button" onClick={action} disabled={disabled}>
    {status === 'loading' && 'carregando'}
    {status === 'done' && 'Feito'}
    {status === '' && title}
  </button>
);
