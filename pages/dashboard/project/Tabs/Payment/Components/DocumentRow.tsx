import { CREATEDOCUMENT, UPDATEDOCUMENT } from '@/apollo/queries/auth';
import variables from '@/config/variables';
import { useAppDispatch } from '@/hooks';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  TableCell,
  TableRow,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const DocumentRow = ({
  data,
  documents = [],
  user,
  rowNo,
  projectTitle,

  hideAdditionalDocuments
}) => {
  const theme = useTheme();
  const [images, setImages] = useState([]);
  const [imagesChanged, setImagesChange] = useState([]);
  const [moreRow, setMoreRow] = useState(rowNo);
  const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [projectName, setProjectname] = useState(projectTitle);
  const [
    additionalProjectAmountAgencyCode,
    setAdditionalProjectAmountAgencyCode
  ] = useState(['', '', '', '']);
  const [isLoading, setLoading] = useState(false);

  const [statusUpdate, setStatusUpdate] = useState([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setMoreRow(rowNo);
  }, [rowNo]);
  useEffect(() => {
    const _imgs = [];
    const _referralAgencyCode = [];
    for (let _document of documents) {
      _imgs.push(_document.url);
      _referralAgencyCode.push(_document.referralAgencyCode);
    }

    setImages(_imgs);
    let newArrReferralAgencyCode = ['', '', '', ''];
    setAdditionalProjectAmountAgencyCode(newArrReferralAgencyCode);
    data.config.items.map((docTitle) => {
      user.documents.map((doc) => {
        let tempProjectName = projectName.toLowerCase() + '_' + docTitle.id;
        if (doc.title === tempProjectName) {
          newArrReferralAgencyCode[
            parseInt(tempProjectName[tempProjectName.length - 1]) - 1
          ] = doc.referralAgencyCode || '';
        }
      });
    });
    setAdditionalProjectAmountAgencyCode(newArrReferralAgencyCode);
  }, [documents, user]);
  const handleCreateDocument = async (
    title: string,
    url: string,
    referralAgencyCode: string
  ) => {
    return await createDocument({
      variables: {
        title,
        url,
        referralAgencyCode
      }
    });
  };

  const handleUpdateDocument = async (
    id: string,
    title: string,
    url: string,
    referralAgencyCode: string
  ) => {
    return await updateDocument({
      variables: {
        id,
        title,
        url,
        referralAgencyCode
      }
    });
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
    return { ...newUser, documents: newDocs };
  };

  const statusCheck = (docId) => {
    let updatedStatus = false;
    statusUpdate?.map((stat) => {
      if (docId === stat.id) {
        updatedStatus = stat.status;
      }
    });
    // console.log(updatedStatus);
    return updatedStatus;
  };
  const handleDocumentUpload = async () => {
    setLoading(true);
    try {
      for (let i = 0; i < moreRow; i++) {
        if (imagesChanged[i]) {
          const documentTitle = projectTitle + '_' + data.config.items[i].id;
          const imgUrl = await handleImageUpload(images[i]);
          const referAgencyCode = additionalProjectAmountAgencyCode[i];
          const _document = documents.find((document) => {
            if (document.title.toLowerCase() === documentTitle.toLowerCase()) {
              return true;
            }
          });

          let userAllDocuments = user?.documents;
          if (!userAllDocuments) {
            userAllDocuments = [];
          }
          if (_document) {
            const resp = await handleUpdateDocument(
              _document.id,
              documentTitle.toLowerCase(),
              imgUrl,
              referAgencyCode
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
            const resp = await handleCreateDocument(
              documentTitle.toLowerCase(),
              imgUrl,
              referAgencyCode
            );
            console.log('resp', resp);
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

    for (let i = 0; i < moreRow; i++) {
      let newArrReferralAgencyCode = [...additionalProjectAmountAgencyCode];
      views.push(
        <Box
          sx={{
            height: 160,
            marginTop: 1,
            marginLeft: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            [theme.breakpoints.down('sm')]: {
              marginLeft: 0,
              marginTop: 2
            }
          }}
        >
          <Box
            sx={{
              marginBottom: '10px',
              marginLeft: '15px',
              [theme.breakpoints.down('sm')]: {
                marginBottom: '0px'
              }
            }}
          >
            Status:{' '}
            <span
              style={{
                color:
                  statusCheck(documents[i]?.id) === 'APPROVED'
                    ? 'green'
                    : statusCheck(documents[i]?.id) === 'REJECTED'
                    ? 'red'
                    : documents[i]
                    ? (documents[i].status === 'APPROVED' && 'green') ||
                      (documents[i].status === 'REJECTED' && 'red')
                    : ''
              }}
            >
              {statusCheck(documents[i]?.id) ||
                documents[i]?.status ||
                'NOT STARTED'}
            </span>
          </Box>
          <Button
            disabled={
              projectTitle.includes('Hajipur') || projectTitle.includes('Agra')
            }
            style={{
              cursor: documents[i]
                ? documents[i].status === 'APPROVED'
                  ? 'not-allowed'
                  : 'pointer'
                : 'pointer',
              marginTop: '10px'
            }}
            component="label"
            color={
              documents[i]
                ? documents[i].status === 'APPROVED'
                  ? 'secondary'
                  : 'primary'
                : 'primary'
            }
          >
            Choose {items[i]?.name}
            <input
              type="file"
              accept="image/*"
              hidden
              disabled={
                documents[i]
                  ? documents[i].status === 'APPROVED'
                    ? true
                    : false
                  : false
              }
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
          {!user.isKycAgent && (
            <TextField
              required
              id="outlined"
              label="Secondary Promoter"
              disabled={
                documents[i]
                  ? documents[i].status === 'APPROVED'
                    ? true
                    : false
                  : false
              }
              fullWidth
              value={additionalProjectAmountAgencyCode[i]}
              variant="outlined"
              onChange={(e) => {
                e.target.value
                  ? (newArrReferralAgencyCode[i] = e.target.value)
                  : (newArrReferralAgencyCode[i] = null);
                setAdditionalProjectAmountAgencyCode(newArrReferralAgencyCode);
              }}
            />
          )}
        </Box>
      );
    }
    return views;
  };

  const getPreview = () => {
    const views: any = [];
    const items = data.config.items;
    for (let i = 0; i < moreRow; i++) {
      const _img = images[i];

      if (_img) {
        views.push(
          <div style={{ marginTop: 15 }}>
            <img
              src={typeof _img == 'object' ? URL.createObjectURL(_img) : _img}
              height={150}
              style={{ marginLeft: '5px' }}
            />
          </div>
        );
      }
    }
    if (views.length == 0) {
      return <Typography variant="subtitle1">No Document</Typography>;
    }
    return views;
  };

  return (
    <>
      <TableRow
        sx={{
          '&:last-child td, &:last-child th': { border: 0 }
        }}
      >
        <TableCell
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: 'none',
            [theme.breakpoints.down('sm')]: {
              paddingRight: 0
            }
          }}
        >
          {getPreview()}
        </TableCell>

        <TableCell style={{ border: 'none' }}>{getActionCell()}</TableCell>
      </TableRow>
      <div style={{ marginBottom: 40 }}>
        {moreRow <= 10 && (
          <LoadingButton
            variant="contained"
            disabled={
              images.length !== moreRow ||
              projectTitle.includes('Hajipur') ||
              projectTitle.includes('Agra')
            }
            onClick={() => {
              setMoreRow(moreRow + 1);
            }}
          >
            Add More
          </LoadingButton>
        )}
        <LoadingButton
          sx={{ marginLeft: 1 }}
          variant="contained"
          onClick={hideAdditionalDocuments}
        >
          Go Back
        </LoadingButton>

        <LoadingButton
          sx={{ marginLeft: 1 }}
          loading={isLoading}
          disabled={
            projectTitle.includes('Hajipur') || projectTitle.includes('Agra')
          }
          variant="contained"
          onClick={() => {
            handleDocumentUpload();
          }}
        >
          Upload
        </LoadingButton>
      </div>
    </>
  );
};
export default DocumentRow;
