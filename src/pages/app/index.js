import React, { useContext, useState } from 'react';
import { AuthRoute } from '../../auth';
import AuthContext from '../../contexts/auth';

import { MdDirectionsBike, MdPowerSettingsNew } from 'react-icons/md';
import { FiPackage, FiTag, FiPercent, FiUser } from 'react-icons/fi';

import { HeaderApp } from '../../components/header';
import { NavItem, Avatar } from '../../components/item';
import Categories from '../../components/categories';
import Products from '../../components/products';
import { FilterButton } from '../../components/button';
import { NewCategory } from '../../components/modal';

const App = () => {
  const [currentView, setCurrentView] = useState('categories');
  const [sort, setSort] = useState(-1);
  const [showModalAddCategory, setShowModalAddCategory] = useState(false);

  const { store, signOut } = useContext(AuthContext);

  if (!store) return <p>carregando</p>;

  return (
    <div className="app">
      <div className="container">
        <HeaderApp iconLeft={<MdPowerSettingsNew />} actionLeft={signOut}>
          {currentView === 'categories' || currentView === 'products' ? (
            <FilterButton action={() => setSort(sort === -1 ? 1 : -1)} />
          ) : null}
        </HeaderApp>
        <section className="panel">
          <nav>
            <Avatar image={store.avatar} title={store.name} subtitle={store.whatsapp} />
            <NavItem
              icon={<MdDirectionsBike />}
              title="Pedidos"
              subtitle="Lista de pedidos ativos"
              action={() => setCurrentView('')}
            />
            <NavItem
              icon={<FiPackage />}
              title="Produtos"
              subtitle="Lista de produtos"
              action={() => {
                setCurrentView('products');
                setSort(-1);
              }}
            />
            <NavItem
              icon={<FiTag />}
              title="Categorias"
              subtitle="Categoria dos produtos"
              action={() => {
                setCurrentView('categories');
                setSort(-1);
              }}
            />
            <NavItem
              icon={<FiPercent />}
              title="Promoções"
              subtitle="Produtos em promoção"
              action={() => setCurrentView('')}
            />
            <NavItem
              icon={<FiUser />}
              title="Perfil"
              subtitle="Informações da Loja"
              action={() => setCurrentView('')}
            />
          </nav>
          <div className="content">
            {currentView === 'categories' && (
              <Categories sort={sort} addAction={() => setShowModalAddCategory(true)} />
            )}
            {currentView === 'products' && <Products sort={sort} />}
          </div>
        </section>
      </div>
      <NewCategory
        store={store}
        isActived={showModalAddCategory}
        closeAction={() => setShowModalAddCategory(!showModalAddCategory)}
      />
    </div>
  );
};

export default AuthRoute(App);
