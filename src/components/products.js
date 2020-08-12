import React, { useState, useEffect } from 'react';
import FlatList from 'flatlist-react';

import apiReq from '../services/reqToken';
import { CardItem } from './item';
import { NavigationButton } from './button';

const Products = ({ sort }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  async function loadProducts() {
    if (loading) return;

    if (total > 0 && products.length === total) return;

    setLoading(true);

    const { data, headers } = await apiReq.get('products', {
      params: { page, category: category._id }
    });

    setPage(page + 1);

    if (data.products.length) {
      setProducts([...products, ...data.products]);
      setTotal(headers['x-total-count']);
    } else {
      setHasMoreItems(false);
    }

    setCategories(data.categories);

    setLoading(false);
  }

  function loadProductWithParams(selectCategory) {
    if (selectCategory !== category && !loading) {
      setTotal(0);
      setProducts([]);
      setPage(1);
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

  useEffect(() => {
    sortProducts();
  }, [sort]);

  return (
    <div className="list">
      <header className="headerSelector">
        <NavigationButton
          title="Todos"
          active={!category._id ? true : false}
          action={() => loadProductWithParams({})}
        />
        {categories.map((item) => (
          <NavigationButton
            key={item._id}
            title={item.name}
            active={item._id === category._id ? true : false}
            action={() => loadProductWithParams(item)}
          />
        ))}
      </header>
      <FlatList
        list={products}
        key={(item) => String(item._id)}
        renderItem={(item) => (
          <CardItem
            action={() => {}}
            image={item.image}
            title={item.name}
            price={item.price}
            key={item._id}
          />
        )}
        renderWhenEmpty={() => (
          <>
            {loading && (
              <>
                <div className="cardItem"></div>
                <div className="cardItem"></div>
                <div className="cardItem"></div>
                <div className="cardItem"></div>
                <div className="cardItem"></div>
              </>
            )}
            {!loading && products.length === 0 && page !== 1 && (
              <div>
                <h4>{category.name}</h4>
                <p>Nenhum Produto nessa categoria. Clique no botão abaixo e adicione!</p>
                <button className="button normal">Adicionar</button>
              </div>
            )}
          </>
        )}
        hasMoreItems={hasMoreItems}
        loadMoreItems={loadProducts}
        paginationLoadingIndicator={<div>carregando...</div>}
      />
    </div>
  );
};

export default Products;
