import React, { useState, useEffect } from 'react';
import FlatList from 'flatlist-react';

import apiReq from '../services/reqToken';
import { CardItem } from './item';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
  const [sort, setSort] = useState(1);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadProducts() {
    if (loading) return;

    if (total > 0 && products.length === total) return;

    setLoading(true);

    const { data, headers } = await apiReq.get('products', {
      params: { page, category: category._id }
    });

    setProducts([...products, ...data.products]);

    setTotal(headers['x-total-count']);
    setPage(page + 1);

    setCategories(data.categories);

    setLoading(false);
  }

  function loadProductWithParams(selectCategory) {
    if (selectCategory !== category && !loading) {
      setTotal(0);
      setProducts([]);
      setPage(1);
      setSort(1);
      setCategory(selectCategory);
    }
  }

  function sortProducts() {
    products.sort((a, b) => {
      if (sort === 1) {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
      }
      if (sort === -1) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
      }
      return 0;
    });
    setProducts([...products]);
  }

  useEffect(() => {
    loadProducts();
  }, [category]);

  return (
    <div className="list">
      <FlatList
        list={products}
        key={(item) => String(item._id)}
        renderItem={(item) => (
          <CardItem action={() => {}} image={item.image} title={item.name} price={item.price} />
        )}
        hasMoreItems={true}
        loadMoreItems={loadProducts}
      />
    </div>
  );
};

export default Products;
