import React, { useState } from 'react';
import apiReq from '../services/reqToken';

import { uploadImage } from '../services/uploadImage';
import { MdClose, MdPermMedia } from 'react-icons/md';
import { TextInput } from './input';
import { Button } from './button';

export const NewCategory = ({ isActived, closeAction, store }) => {
  const [image, setImage] = useState(null);
  const [imageAsFile, setImageAsFile] = useState(null);
  const [name, setName] = useState();
  const [alert, setAlert] = useState();
  const [status, setStatus] = useState('');

  async function handleNewCategory(e) {
    e.preventDefault();

    setStatus('loading');

    let newImage;

    if (imageAsFile) {
      newImage = await uploadImage(imageAsFile, store.store_id);
    }

    const { data } = await apiReq.post('categories/new', {
      image: imageAsFile ? newImage : null,
      name
    });

    if (data.error) {
      setStatus();
      setAlert(data.error);
      return;
    }

    setImage(null);
    setImageAsFile(null);
    closeAction();
    setStatus('done');
  }

  return isActived ? (
    <div className="modalBackground">
      <div className="modal" style={{ paddingBottom: 0 }}>
        <button onClick={closeAction} className="closeButton">
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
          />

          <Button title="Criar categoria" />
        </form>
      </div>
    </div>
  ) : null;
};
