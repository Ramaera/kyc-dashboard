import axios from 'axios';

const handleImageUpload = async (img) => {
  const form = new FormData();
  form.append('document', img);

  const resp = await axios.post(
    `${process.env.CARD_REST_API}/documents/upload`,
    form,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  );
  return resp.data.url;
};

export default handleImageUpload;
