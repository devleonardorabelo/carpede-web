import React, { createContext, useState, useEffect } from 'react';
import apiReq from '../services/reqToken';
import { uploadImage } from '../services/uploadImage';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsPage, setProductsPage] = useState(1);
  const [productsHasMoreItems, setProductsHasMoreItems] = useState(true);
  const [category, setCategory] = useState({});

  const [categories, setCategories] = useState([]);
  const [categoriesPage, setCategoriesPage] = useState(1);
  const [categoriesHasMoreItems, setCategoriesHasMoreItems] = useState(true);

  const [sort, setSort] = useState(-1);
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    if (loading) return;

    setLoading(true);

    const { data } = await apiReq.get('categories', {
      params: { page: productsPage }
    });

    if (data.length) {
      setProductsPage(productsPage + 1);
      setProducts([...categories, ...data]);
    } else {
      setProductsHasMoreItems(false);
    }

    setLoading(false);
  };

  const loadCategories = async () => {
    if (loading) return;

    setLoading(true);

    const { data } = await apiReq.get('categories', {
      params: { page: categoriesPage, category: category._id }
    });

    if (data.length) {
      setCategoriesPage(categoriesPage + 1);
      setCategories([...categories, ...data]);
    } else {
      setCategoriesHasMoreItems(false);
    }

    setLoading(false);
  };

  const addCategory = async (image, directory, name) => {
    let newImage;

    if (image) newImage = await uploadImage(image, directory);

    const { data } = await apiReq.post('categories/new', {
      image: newImage,
      name
    });

    if (data.error) return data;

    setCategories([...categories, data.category]);

    return data;
  };

  const editCategory = async (id, image, name) => {
    const { data } = await apiReq.post('categories/edit', {
      id,
      image,
      name
    });

    if (data.error) return data;

    const index = categories.findIndex((obj) => obj._id === id);

    if (index !== -1) {
      categories[index] = data.category;
      setCategories([...categories]);
    }
    return data;
  };

  const sortArray = (array, order, target) => {
    setSort(order);
    array.sort((a, b) => {
      if (sort === -1) {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
      }
      if (sort === 1) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
      }
      return 0;
    });
    if (target === 'categories') setCategories([...array]);
    if (target === 'products') setProducts([...array]);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        loadProducts,
        productsPage,
        productsHasMoreItems,

        categories,
        loadCategories,
        categoriesPage,
        categoriesHasMoreItems,
        addCategory,
        editCategory,

        loading,
        sortArray
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
