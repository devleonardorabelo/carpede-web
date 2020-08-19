import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../contexts/app';

import { MdClose, MdDelete, MdPermMedia } from 'react-icons/md';
import { TextInput, TextArea } from './input';
import { Button } from './button';

export const NewCategory = ({ isActived, closeAction, store }) => {
  const { addCategory } = useContext(AppContext);

  const [image, setImage] = useState(null);
  const [imageAsFile, setImageAsFile] = useState(null);
  const [name, setName] = useState();
  const [alert, setAlert] = useState();
  const [status, setStatus] = useState('');

  async function handleNewCategory(e) {
    e.preventDefault();

    setStatus('loading');

    const data = await addCategory(imageAsFile, store.store_id, name);

    if (data.error) {
      setStatus('');
      setAlert(data.error);
      return;
    }

    setImage(null);
    setImageAsFile(null);
    closeAction();
    setStatus('');
  }

  return isActived ? (
    <div className="modalBackground">
      <div className="modal" style={{ paddingBottom: 0 }}>
        <button
          onClick={() => {
            closeAction();
            setImageAsFile();
            setName('');
            setImage();
          }}
          className="modalButton close">
          <MdClose />
        </button>

        <div
          className="previewImage"
          style={{
            backgroundImage: image ? `url('${image}')` : null,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}>
          <label htmlFor="addCategoryImage">
            <div
              className="circularButton"
              style={{ position: 'absolute', top: `calc(50% - 32px)`, left: `calc(50% - 32px)` }}>
              <MdPermMedia />
            </div>
          </label>
        </div>

        <form
          className="modalContent"
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleNewCategory}>
          <input
            type="file"
            name=""
            id="addCategoryImage"
            accept="image/x-png,image/gif,image/jpeg, image/jpg"
            onChange={(e) => {
              e.target.files[0] && setImage(URL.createObjectURL(e.target.files[0]));
              setImageAsFile(e.target.files[0]);
            }}
          />

          <TextInput
            label="Nome da Categoria"
            style={{ marginBottom: '16px' }}
            action={(e) => setName(e.target.value)}
            name="name"
            error={alert}
          />

          <Button title="Criar categoria" status={status} />
        </form>
      </div>
    </div>
  ) : null;
};
export const EditCategory = ({ isActived, closeAction, category, store }) => {
  const { editCategory, deleteCategory } = useContext(AppContext);

  const [image, setImage] = useState(category.image);
  const [imageAsFile, setImageAsFile] = useState(null);
  const [name, setName] = useState(category.name);

  const [alert, setAlert] = useState();
  const [status, setStatus] = useState('');

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    setStatus('loading');

    const data = await editCategory(id, image, store.store_id, imageAsFile, name);

    if (data.error) {
      setStatus('');
      setAlert(data.error);
      return;
    }

    setImage(null);
    setImageAsFile(null);
    closeAction();
    setStatus('');
  };

  useEffect(() => {
    setName(category.name);
    setImage(category.image);
  }, [category]);

  return isActived ? (
    <div className="modalBackground">
      <div className="modal" style={{ paddingBottom: 0 }}>
        <button
          onClick={() => {
            closeAction();
            setImageAsFile();
            setName('');
            setImage();
          }}
          className="modalButton close">
          <MdClose />
        </button>
        <button
          onClick={() => {
            closeAction();
            deleteCategory(category._id);
          }}
          className="modalButton delete">
          <MdDelete />
        </button>

        <div
          className="previewImage"
          style={{
            backgroundImage: image ? `url('${image}')` : `url('${category.image}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}>
          <label htmlFor="addCategoryImage">
            <div
              className="circularButton"
              style={{ position: 'absolute', top: `calc(50% - 32px)`, left: `calc(50% - 32px)` }}>
              <MdPermMedia />
            </div>
          </label>
        </div>

        <form
          className="modalContent"
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={(e) => handleUpdate(e, category._id)}>
          <input
            type="file"
            id="addCategoryImage"
            accept="image/x-png,image/gif,image/jpeg, image/jpg"
            onChange={(e) => {
              e.target.files[0] && setImage(URL.createObjectURL(e.target.files[0]));
              setImageAsFile(e.target.files[0]);
            }}
          />

          <TextInput
            label="Nome da Categoria"
            style={{ marginBottom: '16px' }}
            action={(e) => setName(e.target.value)}
            name="name"
            error={alert}
            defaultValue={category.name}
          />

          <Button title="Criar categoria" status={status} />
        </form>
      </div>
    </div>
  ) : null;
};
export const NewProduct = ({ isActived, closeAction, store }) => {
  const { addCategory } = useContext(AppContext);

  const [image, setImage] = useState(null);
  const [imageAsFile, setImageAsFile] = useState(null);
  const [name, setName] = useState('');
  const [category, setCategory] = useState({});
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [onSale, setOnSale] = useState(false);
  const [onSaleValue, setOnSaleValue] = useState('');

  const [alert, setAlert] = useState();
  const [status, setStatus] = useState('');

  async function handleNewCategory(e) {
    e.preventDefault();

    setStatus('loading');

    const data = await addCategory(imageAsFile, store.store_id, name);

    if (data.error) {
      setStatus('');
      setAlert(data.error);
      return;
    }

    setImage(null);
    setImageAsFile(null);
    closeAction();
    setStatus('');
  }

  return isActived ? (
    <div className="modalBackground">
      <div className="modal" style={{ paddingBottom: 0 }}>
        <button
          onClick={() => {
            closeAction();
            setImageAsFile();
            setName('');
            setImage();
          }}
          className="modalButton close">
          <MdClose />
        </button>

        <div
          className="previewImage"
          style={{
            backgroundImage: image ? `url('${image}')` : null,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}>
          <label htmlFor="addCategoryImage">
            <div
              className="circularButton"
              style={{ position: 'absolute', top: `calc(50% - 32px)`, left: `calc(50% - 32px)` }}>
              <MdPermMedia />
            </div>
          </label>
        </div>

        <form
          className="modalContent"
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleNewCategory}>
          <input
            type="file"
            name=""
            id="addCategoryImage"
            accept="image/x-png,image/gif,image/jpeg, image/jpg"
            onChange={(e) => {
              e.target.files[0] && setImage(URL.createObjectURL(e.target.files[0]));
              setImageAsFile(e.target.files[0]);
            }}
          />

          <TextInput
            label="Nome da Categoria"
            style={{ marginBottom: '8px' }}
            action={(e) => setName(e.target.value)}
            name="name"
            error={alert}
          />

          <TextArea
            label="Descrição"
            name="description"
            action={(e) => setDescription(e.target.value)}
            error={alert}
            textAreaStyle={{ minHeight: '100px' }}
          />

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <TextInput
              label="Preço"
              style={{ marginBottom: '16px', width: '130px', marginRight: '8px' }}
              action={(e) => setName(e.target.value)}
              name="name"
              error={alert}
            />
            <TextInput
              label="Nome da Categoria"
              style={{ marginBottom: '16px' }}
              action={(e) => setName(e.target.value)}
              name="name"
              error={alert}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <TextInput
              label="Oferta"
              style={{ marginBottom: '16px', width: '130px', marginRight: '8px' }}
              action={(e) => setName(e.target.value)}
              name="name"
              error={alert}
            />
            <TextInput
              label="Nome da Categoria"
              style={{ marginBottom: '16px' }}
              action={(e) => setName(e.target.value)}
              name="name"
              error={alert}
            />
          </div>

          <Button title="Criar categoria" status={status} />
        </form>
      </div>
    </div>
  ) : null;
};
