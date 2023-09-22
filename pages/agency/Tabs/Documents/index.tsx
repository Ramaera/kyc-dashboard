import {
  UPDATE_BY_ADMIN,
  UPDATE_STATUS_BY_ADMIN
} from '@/apollo/queries/updateUser';
import documentsConfig from '@/config/documentsConfig';
import { setAllTheUsers } from '@/state/slice/allUsersSlice';
import { setFoundUser } from '@/state/slice/foundUserSlice';
import DocumentType from '@/state/types/document';
import allUsersUpdater from '@/utils/updateUserList';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Box, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import 'primeicons/primeicons.css'; //icons
import 'primereact/resources/primereact.min.css'; //core css
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useDispatch, useSelector } from 'react-redux';

const rows = [
  {
    config: documentsConfig.avatar,
    status: -1
  },
  {
    config: documentsConfig.aadhar,
    status: -1
  },
  {
    config: documentsConfig.pancard,
    status: -1
  },
  {
    config: documentsConfig.passbook,
    status: -1
  },
  {
    config: documentsConfig.voterId,
    status: -1,
    isOptional: true
  },
  {
    config: documentsConfig.driving_license,
    status: -1,
    isOptional: true
  }
];

const DocumentRow = ({ user, data, documents = [] }) => {
  const usersList = useSelector((state: any) => state.allUsers.allTheUsers);
  const dispatch = useDispatch();
  /* if (!documents[0]) {
    return null;
  } */
  const [images, setImages] = useState([]);
  const [imagesChanged, setImagesChange] = useState([]);
  const [updateDataByAdmin] = useMutation(UPDATE_BY_ADMIN);
  const [updateDocumentStatusByAdmin] = useMutation(UPDATE_STATUS_BY_ADMIN);
  //const [createDocument] = useMutation(CREATEDOCUMENT);
  // const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [isLoading, setLoading] = useState(false);

  const updateUserStatus = (docId, docStatus) => {
    let newUser = user;
    let newDocs = [];
    user.documents.map((item) => {
      if (item.id === docId) {
        newDocs.push({ ...item, status: docStatus });
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs };
  };

  const updateUser = (id, imgUrl) => {
    let newUser = user;
    let newDocs = [];
    user.documents.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, url: imgUrl });
        // newDocs.push(...item, url:imgUrl);
      } else {
        newDocs.push(item);
      }
    });
    return { ...newUser, documents: newDocs };
  };
  useEffect(() => {
    const _imgs = [];
    for (let _document of documents) {
      _imgs.push(_document.url);
    }
    setImages(_imgs);
  }, [documents]);
  /*  const getBadge = (status) => {
    let msg = 'Upload';
    if (status != -1) {
      msg = 'Pending';
    }
    return (
      <TableCell>
        {' '}
        <Badge badgeContent={msg} color="secondary"></Badge>{' '}
      </TableCell>
    );
  }; */
  /* const handleCreateDocument = async (title: string, url: string) => {
    await createDocument({
      variables: {
        title,
        url
      }
    });

    toast.success(`${title} Uploaded`);
  }; */

  const changeDocumentStatus = async (docId, docStatus) => {
    await updateDocumentStatusByAdmin({
      variables: {
        id: docId,
        status: docStatus
      }
    });
    dispatch(setFoundUser(updateUserStatus(docId, docStatus)));
    dispatch(
      setAllTheUsers(
        allUsersUpdater(usersList, updateUserStatus(docId, docStatus))
      )
    );
    // console.log('respStatus', respStatus);
  };
  const handleUpdateDocument = async (
    id: string,
    title: string,
    url: string
  ) => {
    await updateDataByAdmin({
      variables: {
        id: user.id,
        documentId: id,
        url: url
      }
    });
    dispatch(setFoundUser(updateUser(id, url)));
    dispatch(setAllTheUsers(allUsersUpdater(usersList, updateUser(id, url))));
    // console.log('respData', respData);

    toast.success(`${title} Updated`);
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
  const handleDocumentUpload = async () => {
    setLoading(true);
    //handle upload
    try {
      for (let i = 0; i < imagesChanged.length; i++) {
        if (imagesChanged[i]) {
          const documentTitle = data.config.items[i].id;
          const imgUrl = await handleImageUpload(images[i]);
          // toast.success(`${documentTitle} Updated`)
          const _document = documents.find((document) => {
            if (document.title.toLowerCase() === documentTitle.toLowerCase()) {
              return true;
            }
          });
          if (_document) {
            //updateDocument
            await handleUpdateDocument(_document.id, documentTitle, imgUrl);
            // location.reload()
          } else {
            // console.log("can't create documents");
            /*  //create document
            await handleCreateDocument(documentTitle, imgUrl);
            // location.reload() */
          }
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
      if (!documents[i]) {
        return;
      }
      views.push(
        <>
          <Button component="label">
            Choose {items[i].name}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  const _images = [...images];
                  _images[i] = f.target.files[0];
                  setImages(_images);
                  // console.log('imageChanged', _images[i]);
                  const _imagesChanged = [...imagesChanged];
                  _imagesChanged[i] = true;
                  setImagesChange(_imagesChanged);
                }
              }}
            />
          </Button>
          <Box display="flex">
            <Button
              onClick={() => changeDocumentStatus(documents[i].id, 'APPROVED')}
              variant="outlined"
              color="success"
            >
              Approve
            </Button>
            <Button
              onClick={() => changeDocumentStatus(documents[i].id, 'REJECTED')}
              variant="outlined"
              color="error"
              sx={{ ml: 2 }}
            >
              Reject
            </Button>
          </Box>
        </>
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
          <PhotoProvider>
            <PhotoView
              src={typeof _img == 'object' ? URL.createObjectURL(_img) : _img}
            >
              <img
                src={typeof _img == 'object' ? URL.createObjectURL(_img) : _img}
                height={100}
                style={{ marginRight: '5px' }}
                width={100}
              />
            </PhotoView>
          </PhotoProvider>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 50 }}>
          <span
            style={{
              color: documents[0]
                ? (documents[0].status === 'APPROVED' && 'limegreen') ||
                  (documents[0].status === 'REJECTED' && 'red')
                : ''
            }}
          >
            {documents[0] && documents[0].status}
          </span>

          {documents[1] && (
            <span
              style={{
                color: documents[1]
                  ? (documents[1].status === 'APPROVED' && 'limegreen') ||
                    (documents[1].status === 'REJECTED' && 'red')
                  : ''
              }}
            >
              {documents[1] && documents[1].status}
            </span>
          )}
        </div>
      </TableCell>
    </TableRow>
  );
};
const DocumentTab = () => {
  const user = useSelector((state: any) => state.foundUser.foundUser);

  const getDocumentsByConfig = (configs) => {
    const documents = [];
    if (user && user.documents) {
      for (let config of configs) {
        const document = user.documents.find((doc: DocumentType) => {
          // console.log('docccccc', doc);
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
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Document Name</TableCell>
              <TableCell>Preview</TableCell>
              <TableCell style={{ padding: '0 0 0 2rem' }}>Action</TableCell>
              <TableCell style={{ padding: '0 0 0 0' }}>
                Upload Action
              </TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <DocumentRow
                  user={user}
                  data={row}
                  key={index}
                  documents={getDocumentsByConfig(row.config.items)}
                />
              );
            })}
          </TableBody>
        </Table>
        <Toaster position="bottom-center" reverseOrder={false} />
      </TableContainer>
    </>
  );
};
export default DocumentTab;
