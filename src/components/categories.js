import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import FlatList from 'flatlist-react';

import apiReq from '../services/reqToken';
import { CardItem } from './item';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [sort, setSort] = useState(1);
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

  return (
    <div className="list">
      <FlatList
        list={categories}
        key={(item) => String(item._id)}
        renderItem={(item) => <CardItem action={() => {}} image={item.image} title={item.name} />}
        hasMoreItems={true}
        loadMoreItems={loadCategories}
      />
    </div>
  );
};

export default Categories;
