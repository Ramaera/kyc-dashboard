import axios from 'axios';

const handleImageUpload = async (img) => {
  const form = new FormData();
  form.append('document', img);

  console.log('img', img, 'form', form);
  try {
    console.log('NEXR', process.env.NEXT_PUBLIC_API_URL);
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/documents/upload`,
      form,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return resp.data.url;
  } catch (err) {
    console.log(err);
  }
};

export default handleImageUpload;
