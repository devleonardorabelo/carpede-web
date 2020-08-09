import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthRoute } from '../../auth';
import AuthContext from '../../contexts/auth';

import { FiLogOut } from 'react-icons/fi';
import { MdDirectionsBike } from 'react-icons/md';
import { FiPackage, FiTag, FiPercent, FiUser } from 'react-icons/fi';

import { HeaderApp } from '../../components/header';
import { NavItem, Avatar } from '../../components/item';
import Categories from '../../components/categories';
import Products from '../../components/products';

const App = () => {
  const [currentView, setCurrentView] = useState('categories');

  const { store, signOut } = useContext(AuthContext);

  if (!store) return <p>carregando</p>;

  return (
    <div className="app">
      <div className="container">
        <HeaderApp iconLeft={<FiLogOut />} actionLeft={signOut} />
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
              action={() => setCurrentView('products')}
            />
            <NavItem
              icon={<FiTag />}
              title="Categorias"
              subtitle="Categoria dos produtos"
              action={() => setCurrentView('categories')}
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
            {currentView === 'categories' && <Categories />}
            {currentView === 'products' && <Products />}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuthRoute(App);
