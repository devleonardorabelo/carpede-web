import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthRoute } from '../../auth';
import AuthContext from '../../contexts/auth';

import { FiLogOut } from 'react-icons/fi';
import { MdDirectionsBike } from 'react-icons/md';
import { FiPackage, FiTag, FiPercent, FiUser } from 'react-icons/fi';

import { HeaderApp } from '../../components/header';
import { NavItem } from '../../components/item';

const App = () => {
  const { store, signOut } = useContext(AuthContext);
  const router = useRouter();

  console.log(store);

  return (
    <div className="app">
      <div className="container">
        <HeaderApp iconLeft={<FiLogOut />} />
        <section className="panel">
          <nav>
            <NavItem
              icon={<MdDirectionsBike />}
              title="Pedidos"
              subtitle="Lista de pedidos ativos"
              action="app/orders"
            />
            <NavItem
              icon={<FiPackage />}
              title="Produtos"
              subtitle="Lista de produtos"
              action="app/products"
            />
            <NavItem
              icon={<FiTag />}
              title="Categorias"
              subtitle="Categoria dos produtos"
              action="app/categories"
            />
            <NavItem
              icon={<FiPercent />}
              title="Promoções"
              subtitle="Produtos em promoção"
              action="app/onsale"
            />
            <NavItem
              icon={<FiUser />}
              title="Perfil"
              subtitle="Informações da Loja"
              action="app/profile"
            />
          </nav>
          <div className="content">content</div>
        </section>
      </div>
    </div>
  );
};

export default AuthRoute(App);
