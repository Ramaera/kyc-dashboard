import { CREATEDOCUMENT, UPDATEDOCUMENT } from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppSelector, useAppDispatch } from '@/hooks';
import DocumentType from '@/state/types/document';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import TableRow from '@mui/material/TableRow';
import 'primeicons/primeicons.css'; //icons
import 'primereact/resources/primereact.min.css'; //core css
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { rows } from './documentData';

const DocumentRow = ({ data, documents = [], user }) => {
  const [images, setImages] = useState([]);
  const [imagesChanged, setImagesChange] = useState([]);
  const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const _imgs = [];
    for (let _document of documents) {
      _imgs.push(_document.url);
    }
    setImages(_imgs);
  }, [documents, user]);

  const handleCreateDocument = async (title: string, url: string) => {
    return await createDocument({
      variables: {
        title,
        url
      }
    });
  };

  const handleUpdateDocument = async (
    id: string,
    title: string,
    url: string
  ) => {
    return await updateDocument({
      variables: {
        id,
        title,
        url
      }
    });
  };

  const isValidToClick = () => {
    const hasSomethingChanged = imagesChanged.find((img) => {
      if (img) {
        return true;
      }
    });
    if (images.length == data.config.items.length && hasSomethingChanged) {
      return true;
    }
  };
  const updateUser = (id, title, imgUrl) => {
    let newUser = user;
    let newDocs = [];
    user?.documents?.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, title: 'avatar' });
      } else if (item.title !== title) {
        newDocs.push(item);
      }
    });
    console.log(imgUrl, { ...newUser, documents: newDocs });
    return { ...newUser, documents: newDocs };
  };

  const handleDocumentUpload = async () => {
    setLoading(true);

    // console.log({ imagesChanged, images });
    //handle upload
    try {
      for (let i = 0; i < imagesChanged.length; i++) {
        if (imagesChanged[i]) {
          const documentTitle = data.config.items[i].id;
          const imgUrl = await handleImageUpload(images[i]);
          const _document = documents.find((document) => {
            if (document.title.toLowerCase() === documentTitle.toLowerCase()) {
              return true;
            }
          });
          let userAllDocuments = user.documents;
          if (!userAllDocuments) {
            userAllDocuments = [];
          }
          if (_document) {
            const resp = await handleUpdateDocument(
              _document.id,
              documentTitle,
              imgUrl
            );
            await dispatch(
              setOrUpdateUser(updateUser(_document.id, documentTitle, imgUrl))
            );
            toast.success(`${documentTitle} Uploaded`);
            // location.reload();

            const listAfterRemovingExistingDocument = userAllDocuments.filter(
              (doc: any) => {
                return doc.id !== document.id;
              }
            );
            listAfterRemovingExistingDocument.push(resp.data.updateDocument);
            userAllDocuments = listAfterRemovingExistingDocument;
          } else {
            //create document
            const resp = await handleCreateDocument(documentTitle, imgUrl);
            toast.success(`${documentTitle} Uploaded`);
            userAllDocuments = [...userAllDocuments, resp.data.createDocument];
          }
          const _user = { ...user };
          _user.documents = userAllDocuments;
          dispatch(setOrUpdateUser(_user));
        }
      }
    } catch (err) {
      console.log('error', err);
    }
    setLoading(false);
  };
  const getActionCell = () => {
    const views = [];
    const items = data.config.items;
    for (let i = 0; i < items.length; i++) {
      views.push(
        <Button
          style={{
            cursor: documents[0]
              ? documents[0].status === 'APPROVED'
                ? 'not-allowed'
                : 'pointer'
              : 'pointer',
            marginTop: '10px'
          }}
          component="label"
          color={
            documents[0]
              ? documents[0].status === 'APPROVED'
                ? 'secondary'
                : 'primary'
              : 'primary'
          }
        >
          Choose {items[i].name}
          <input
            type="file"
            accept="image/*"
            hidden
            disabled={
              documents[0]
                ? documents[0].status === 'APPROVED'
                  ? true
                  : false
                : false
            }
            onChange={(f) => {
              if (f.target.files.length > 0) {
                const _images = [...images];
                _images[i] = f.target.files[0];
                setImages(_images);
                console.log('imageChanged', _images[i]);
                const _imagesChanged = [...imagesChanged];
                _imagesChanged[i] = true;
                setImagesChange(_imagesChanged);
              }
            }}
          />
        </Button>
      );
    }
    return views;
  };
  const getPreview = () => {
    const views: any = [];
    const items = data.config.items;
    for (let i = 0; i < items.length; i++) {
      const _img = images[i];
      if (_img) {
        views.push(
          <img
            src={typeof _img == 'object' ? URL.createObjectURL(_img) : _img}
            height={100}
            style={{ marginLeft: '5px' }}
          />
        );
      }
    }
    if (views.length == 0) {
      return <Typography variant="subtitle1">No Document</Typography>;
    }
    return views;
  };
  return (
    <TableRow
      key={data.config.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {data.config.name} {data.isOptional ? '(Optional)' : ''}
      </TableCell>

      <TableCell>{getPreview()}</TableCell>

      <TableCell>{getActionCell()}</TableCell>
      <TableCell>
        <LoadingButton
          loading={isLoading}
          disabled={!isValidToClick()}
          variant="contained"
          onClick={() => {
            handleDocumentUpload();
          }}
        >
          Upload
        </LoadingButton>
      </TableCell>

      <TableCell>
        <span
          style={{
            color: documents[0]
              ? (documents[0].status === 'APPROVED' && 'green') ||
                (documents[0].status === 'REJECTED' && 'red')
              : ''
          }}
        >
          {documents[0] && documents[0].status}
        </span>
      </TableCell>
    </TableRow>
  );
};

const DocumentTab = () => {
  const user = useAppSelector((state) => state.user.data);
  // console.log(user);
  // console.log('----------------------', user.documents);
  const getDocumentsByConfig = (configs) => {
    const documents = [];
    if (user && user.documents) {
      for (let config of configs) {
        const document = user?.documents?.find((doc: DocumentType) => {
          if (doc.title.toLowerCase() === config.id.toLowerCase()) {
            return true;
          }
        });
        if (document) {
          documents.push(document);
        }
      }
    }
    return documents;
  };
  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        Kindly Upload the documents requested below
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Document Name</TableCell>
              <TableCell>Preview</TableCell>
              <TableCell style={{ padding: '0 0 0 2rem' }}>Action</TableCell>
              <TableCell style={{ padding: '0 0 0 2rem' }}>
                Upload Action
              </TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <DocumentRow
                data={row}
                key={index}
                user={user}
                documents={getDocumentsByConfig(row.config.items)}
              />
            ))}
          </TableBody>
        </Table>
        <Toaster position="bottom-center" reverseOrder={false} />
      </TableContainer>
    </>
  );
};
export default DocumentTab;
