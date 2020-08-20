import React, { useState, useEffect, useContext } from 'react';
import FlatList from 'flatlist-react';
import apiReq from '../services/reqToken';
import AuthContext from '../contexts/auth';
import AppContext from '../contexts/app';

import { MdAdd } from 'react-icons/md';
import { CardItem } from './item';
import { NavigationButton, CircularButton } from './button';
import { NewProduct } from './modal';

const Products = ({ sort }) => {
  const { store } = useContext(AuthContext);
  const {
    products,
    category,
    categories,
    loadProducts,
    changeCategory,
    loading,
    productsPage: page,
    productsHasMoreItems: hasMoreItems,
    sortArray
  } = useContext(AppContext);

  const [showModalAddProduct, setShowModalAddProduct] = useState(false);
  const [showModalEditProduct, setShowModalEditProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    sortArray(products, sort, 'products');
  }, [sort]);

  return (
    <>
      <div className="list">
        <header className="headerSelector">
          <NavigationButton
            title="Todos"
            active={!category._id ? true : false}
            action={() => changeCategory({})}
          />
          {categories.map((item) => (
            <NavigationButton
              key={item._id}
              title={item.name}
              active={item._id === category._id ? true : false}
              action={() => changeCategory(item)}
            />
          ))}
        </header>
        <FlatList
          list={products}
          key={(item) => String(item._id)}
          renderItem={(item) => (
            <CardItem
              action={() => {
                setSelectedProduct(item);
                setShowModalAddProduct(!showModalAddProduct);
              }}
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
              {!loading && categories.length === 0 && page !== 1 ? (
                <div>
                  <h4>Nenhuma Categoria.</h4>
                  <p>
                    As categorias servem para organizar a lista dos seus produtos. Clique abaixo e
                    adicione sua primeira categoria.
                  </p>
                  <button className="button normal">Adicionar</button>
                </div>
              ) : (
                !loading &&
                products.length === 0 &&
                page !== 1 && (
                  <div>
                    <h4>{category.name}</h4>
                    <p>Nenhum Produto nessa categoria. Clique no botão abaixo e adicione!</p>
                    <button className="button normal">Adicionar</button>
                  </div>
                )
              )}
            </>
          )}
          hasMoreItems={hasMoreItems}
          loadMoreItems={loadProducts}
          paginationLoadingIndicator={<div>carregando...</div>}
        />
        {category.name && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 0' }}>
            <CircularButton
              icon={<MdAdd />}
              action={() => setShowModalAddProduct(!showModalAddProduct)}
            />
          </div>
        )}
      </div>
      <NewProduct
        store={store}
        isActived={showModalAddProduct}
        closeAction={() => setShowModalAddProduct(!showModalAddProduct)}
      />
    </>
  );
};

export default Products;
