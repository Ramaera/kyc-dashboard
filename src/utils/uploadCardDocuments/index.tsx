import axios from 'axios';

const handleCardPaymentProofUpload = async (img) => {
  const form = new FormData();
  // console.log('img', img);

  form.append('document', img);

  try {
    // console.log('swd', process.env.NEXT_PUBLIC_API_URL);

    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/documents/upload`,
      form,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    // console.log('resp', resp);

    return resp.data.url;
  } catch (error) {
    console.log(error);
  }
};

export default handleCardPaymentProofUpload;
