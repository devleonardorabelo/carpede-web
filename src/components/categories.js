import React, { useState, useEffect, useContext } from 'react';
import FlatList from 'flatlist-react';
import AuthContext from '../contexts/auth';
import AppContext from '../contexts/app';

import { MdAdd } from 'react-icons/md';
import { CardItem } from './item';
import { CircularButton } from './button';
import { NewCategory, EditCategory } from './modal';

const Categories = ({ sort }) => {
  const { store } = useContext(AuthContext);
  const {
    categories,
    loadCategories,
    loading,
    categoriesPage: page,
    categoriesHasMoreItems: hasMoreItems,
    sortArray
  } = useContext(AppContext);

  const [showModalAddCategory, setShowModalAddCategory] = useState(false);
  const [showModalAddProduct, setShowModalAddProduct] = useState(false);
  const [categorySelected, setCategorySelected] = useState({});

  useEffect(() => {
    loadCategories();
  }, [categories]);

  useEffect(() => {
    sortArray(categories, sort, 'categories');
  }, [sort]);

  return (
    <>
      <div className="list" style={{ position: 'relative' }}>
        <FlatList
          list={categories}
          renderItem={(item) => (
            <CardItem
              action={() => {
                setCategorySelected(item);
                setShowModalAddProduct(!showModalAddProduct);
              }}
              image={item.image}
              title={item.name}
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
          <CircularButton
            icon={<MdAdd />}
            action={() => setShowModalAddCategory(!showModalAddCategory)}
          />
        </div>
      </div>
      <NewCategory
        store={store}
        isActived={showModalAddCategory}
        closeAction={() => setShowModalAddCategory(!showModalAddCategory)}
      />
      <EditCategory
        category={categorySelected}
        isActived={showModalAddProduct}
        closeAction={() => setShowModalAddProduct(!showModalAddProduct)}
      />
    </>
  );
};

export default Categories;
