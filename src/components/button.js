import React from 'react';
import { MdFilterList } from 'react-icons/md';

export const NavigationButton = ({ title, action }) => (
  <button className="navigationButton" onClick={action}>
    {title}
  </button>
);
export const FilterButton = ({ icon, action, badge }) => (
  <button className="filterButton" onClick={action}>
    <MdFilterList />
  </button>
);
