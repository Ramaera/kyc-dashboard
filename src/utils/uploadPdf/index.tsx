import axios from 'axios';
const handlePdfUpload = async (file) => {
  const form = new FormData();
  form.append('document', file);
  try {
    const resp = await axios.post(
      //   `${process.env.NEXT_PUBLIC_API_URL}/documents/pdfUpload`,
      `https://l83w6jqz-6770.inc1.devtunnels.ms/documents/pdfUpload`,
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
export default handlePdfUpload;
