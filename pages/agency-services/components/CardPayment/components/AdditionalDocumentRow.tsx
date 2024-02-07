import {
  CREATE_PAYMENT_DOCUMENT,
  UPDATEDOCUMENT,
  UPDATE_PAYMENT_DOCUMENT
} from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppDispatch } from '@/hooks';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import handleCardPaymentProofUpload from '@/utils/uploadCardDocuments';
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
import toast, { Toaster } from 'react-hot-toast';

const DocumentRow = ({
  data,
  cardId,
  cardUserId,
  documents = [],
  user,
  rowNo,
  hideAdditionalDocuments
}) => {
  const theme = useTheme();
  const [images, setImages] = useState([]);
  const [imagesChanged, setImagesChange] = useState([]);
  const [utrNos, setUtrNos] = useState([]);
  const [amounts, setAmounts] = useState([]);
  const [moreRow, setMoreRow] = useState(rowNo);
  const [createDocument] = useMutation(CREATE_PAYMENT_DOCUMENT);
  const [updateDocument] = useMutation(UPDATE_PAYMENT_DOCUMENT);
  const [isLoading, setLoading] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const _imgs = [];
    const _utr = [];
    const _amount = [];

    for (let _document of documents) {
      _imgs.push(_document.url);
      _utr.push(_document.utrNo);
      _amount.push(_document.amount);
    }

    setImages(_imgs);
    setUtrNos(_utr);
    setAmounts(_amount);
  }, [documents, user]);

  const handleCreateDocument = async (
    title: string,
    url: string,
    myCardId,
    cardUserId,
    utrNo,
    amount
  ) => {
    return await createDocument({
      variables: {
        title,
        url,
        cardUserId,
        myCardId,
        amount: parseInt(amount),
        utrNo
      }
    });
  };

  const handleUpdateDocument = async (
    id: string,
    title: string,
    imgUrl: string,
    amount: number,
    cardUserId: string,
    cardId: number,
    utrNumber: string
  ) => {
    return await updateDocument({
      variables: {
        title: title,
        url: imgUrl,
        amount: amount,
        cardUserId: cardUserId,
        myCardId: cardId,
        utrNo: utrNumber,
        id: id
      }
    });
  };
  const statusCheck = (docId) => {
    let updatedStatus = false;
    statusUpdate?.map((stat) => {
      if (docId === stat.id) {
        updatedStatus = stat.status;
      }
    });
    return updatedStatus;
  };
  const isValidToClick = () => {
    const hasSomethingChanged = imagesChanged.find((img) => {
      if (img) {
        return true;
      }
    });
    if (rowNo == data.config.items.length && hasSomethingChanged) {
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
    return { ...newUser, documents: newDocs };
  };

  const handleDocumentUpload = async () => {
    setLoading(true);

    try {
      for (let i = 0; i < moreRow; i++) {
        if (imagesChanged[i]) {
          const documentTitle = data.config.items[i].id;
          const imgUrl = await handleCardPaymentProofUpload(images[i]);
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
            await updateDocument({
              variables: {
                title: documentTitle,
                url: imgUrl,
                amount: amounts[i],
                cardUserId: cardUserId,
                myCardId: cardId,
                utrNo: utrNos[i],
                id: _document.id
              }
            });
            await dispatch(
              setOrUpdateUser(updateUser(_document.id, documentTitle, imgUrl))
            );
            toast.success(`${documentTitle} Uploaded`);
            // location.reload();

            const listAfterRemovingExistingDocument = userAllDocuments.filter(
              (doc: any) => {
                return doc.id !== document?.id;
              }
            );
            listAfterRemovingExistingDocument.push(resp.data.updateDocument);
            userAllDocuments = listAfterRemovingExistingDocument;
          } else {
            //create document
            const resp = await handleCreateDocument(
              documentTitle,
              imgUrl,
              cardId,
              cardUserId,
              utrNos[i],
              amounts[i]
            );
            toast.success('Document Uploaded');
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
      views.push(
        <Box
          sx={{
            width: 200,
            // height: 160,
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
            style={{
              cursor: documents[i]
                ? documents[i].status === 'APPROVED'
                  ? 'not-allowed'
                  : 'pointer'
                : 'pointer',
              marginTop: '10px'
            }}
            disabled={
              statusCheck(documents[i]?.id) === 'APPROVED' ||
              documents[i]?.status == 'APPROVED'
            }
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
                  const _imagesChanged = [...imagesChanged];
                  _imagesChanged[i] = true;
                  setImagesChange(_imagesChanged);
                }
              }}
            />
          </Button>
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
      const _utr = utrNos[i];
      const _amount = amounts[i];
      if (_img) {
        views.push(
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <img
              src={typeof _img == 'object' ? URL.createObjectURL(_img) : _img}
              height={150}
              style={{ marginLeft: '5px' }}
            />
            <Box>
              <Box>
                <TextField
                  sx={{ width: 150, marginLeft: 3 }}
                  id="outlined"
                  label="Amount*"
                  value={_amount}
                  variant="outlined"
                  type="number"
                  onChange={(e) => {
                    const updatedAmounts = [...amounts];
                    updatedAmounts[i] = e.target.value;
                    setAmounts(updatedAmounts);
                  }}
                />
              </Box>
              <Box>
                <TextField
                  sx={{ width: 150, marginLeft: 3 }}
                  id="outlined"
                  label="UTR No*"
                  value={_utr}
                  variant="outlined"
                  // type="number"
                  onChange={(e) => {
                    const updatedUtrNos = [...utrNos];
                    updatedUtrNos[i] = e.target.value;
                    setUtrNos(updatedUtrNos);
                  }}
                />
              </Box>
            </Box>
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
      <Box
        sx={{
          border: 'none',
          fontWeight: 800,
          marginTop: 2,
          [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
          }
        }}
      >
        {data.config.name}
      </Box>
      <TableRow
        key={data.config.name}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          '&:last-child td, &:last-child th': { border: 0 }
        }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
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
        </Box>
        <Box>
          {/* <TableCell style={{ border: 'none' }}>
            <Box>
              <TextField
                sx={{ width: 150, marginLeft: 3 }}
                id="outlined"
                label="Amount*"
                value={amount}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </Box>
            <Box>
              <TextField
                sx={{ width: 150, marginLeft: 3 }}
                id="outlined"
                label="UTR No*"
                value={amount}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </Box>
          </TableCell> */}
        </Box>
        {/* <TableCell></TableCell> */}
        {/* <TableCell style={{ border: 'none' }}>
            <LoadingButton
              loading={isLoading}
              // disabled={!isValidToClick()}
              variant="contained"
              onClick={() => {
                handleDocumentUpload();
              }}
            >
              Upload
            </LoadingButton>
          </TableCell> */}
      </TableRow>
      {moreRow <= 3 && (
        <LoadingButton
          variant="contained"
          disabled={images.length !== moreRow}
          onClick={() => {
            setMoreRow(moreRow + 1);
          }}
        >
          Add More
        </LoadingButton>
      )}

      <LoadingButton
        sx={{ marginLeft: 1 }}
        loading={isLoading}
        // disabled={!isValidToClick()}
        variant="contained"
        onClick={() => {
          handleDocumentUpload();
        }}
      >
        Upload
      </LoadingButton>

      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
};
export default DocumentRow;
