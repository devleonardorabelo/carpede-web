import { storage } from '../firebase';

const uploadImage = async (image, directory) => {
  const randomNumber = Math.floor(Math.random() * Math.floor(99999));
  const filename = randomNumber + image.name;
  const refNewImage = `${directory}/${filename}`;

  const upload = await storage.ref(refNewImage).put(image);

  if (upload) {
    const uploaded = await storage.ref(refNewImage).getDownloadURL();
    return uploaded;
  }
  return null;
};

export { uploadImage };
