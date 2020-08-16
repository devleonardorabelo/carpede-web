import React, { useState, useEffect } from 'react';
import FlatList from 'flatlist-react';
import { useRouter } from 'next/router';
import apiReq from '../services/reqToken';

import { MdAdd } from 'react-icons/md';
import { CardItem } from './item';
import { CircularButton } from './button';

const Categories = ({ sort, addAction }) => {
  const router = useRouter();
  const { method, category } = router.query;

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

    setPage(page + 1);

    if (data.length) {
      setCategories([...categories, ...data]);
      setTotal(headers['x-total-count']);
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
    if (category) {
      const index = categories.findIndex((obj) => obj._id === category._id);

      if (index !== -1 && method === 'destroy') {
        categories.splice(index, 1);
        setCategories([...categories]);
        return;
      }
      if (index !== -1 && method === 'update') {
        categories[index] = category;
        setCategories([...categories]);
        return;
      }
      if (index === -1 && method === 'create') {
        setCategories([...categories, category]);
      }
    }
  }, []);

  useEffect(() => {
    sortCategories();
  }, [sort]);

  return (
    <div className="list" style={{ position: 'relative' }}>
      <FlatList
        list={categories}
        renderItem={(item) => (
          <CardItem action={() => {}} image={item.image} title={item.name} key={item._id} />
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
            {!loading && categories.length === 0 && page !== 1 && (
              <div>
                <h4>Categoria</h4>
                <p>
                  As categorias servem para organizar a lista dos seus produtos. Clique abaixo e
                  adicione sua primeira categoria.
                </p>
                <button className="button normal">Adicionar</button>
              </div>
            )}
          </>
        )}
        hasMoreItems={hasMoreItems}
        loadMoreItems={loadCategories}
        paginationLoadingIndicator={<div>testando</div>}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 0' }}>
        <CircularButton icon={<MdAdd />} action={addAction} />
      </div>
    </div>
  );
};

export default Categories;
