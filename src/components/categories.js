import React, { useState, useEffect } from 'react';
import FlatList from 'flatlist-react';

import apiReq from '../services/reqToken';
import { CardItem } from './item';

const Categories = ({ sort, complete }) => {
  const [categories, setCategories] = useState([]);
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadCategories() {
    if (loading) {
      return;
    }

    if (total > 0 && categories.length === total) {
      return;
    }

    setLoading(true);

    const { data, headers } = await apiReq.get('categories', {
      params: { page }
    });

    if (data.length) {
      setCategories([...categories, ...data]);
      setTotal(headers['x-total-count']);
      setPage(page + 1);
    } else {
      setHasMoreItems(false);
    }

    setLoading(false);
  }

  function sortCategories() {
    categories.sort((a, b) => {
      if (sort === 1) {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
      }
      if (sort === -1) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      }
      return 0;
    });
    setCategories([...categories]);
  }

  useEffect(() => {
    loadCategories();
    return;
    if (route) {
      const index = categories.findIndex((obj) => obj._id === route.category._id);

      if (index !== -1 && route.method === 'destroy') {
        categories.splice(index, 1);
        setCategories([...categories]);
        route = {};
        return;
      }
      if (index !== -1 && route.method === 'update') {
        categories[index] = route.category;
        setCategories([...categories]);
        route = {};
        return;
      }
      if (index === -1 && route.method === 'create') {
        setCategories([...categories, route.category]);
        route = {};
      }
    }
  }, []);

  useEffect(() => {
    sortCategories();
  }, [sort]);

  return (
    <div className="list">
      <FlatList
        list={categories}
        renderItem={(item) => (
          <CardItem action={() => {}} image={item.image} title={item.name} key={item._id} />
        )}
        hasMoreItems={hasMoreItems}
        loadMoreItems={loadCategories}
        paginationLoadingIndicator={<div>testando</div>}
      />
    </div>
  );
};

export default Categories;
