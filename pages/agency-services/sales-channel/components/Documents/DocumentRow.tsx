// import { CREATEDOCUMENT, UPDATEDOCUMENT } from '@/apollo/queries';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import {
  Button,
  TableCell,
  TableRow,
  Typography,
  useTheme
} from '@mui/material';
import DocumentType from '@/state/types/document';
import { useEffect, useState } from 'react';
import { setOrUpdateUser } from '@/state/slice/userSlice';
import { useAppDispatch } from '@/hooks';
import UserType from '@/state/types/user';

interface PropType {
  data: {
    config: { id: string; name: string; items: { id: string; name: string }[] };
    status: number;
  };
  Documents: DocumentType[];
  user: UserType | undefined;
}
interface ImagesType {}
interface ImagesChanged {
  img: [];
}

const DocumentRow = ({ data, Documents, user }: PropType) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const [images, setImages] = useState<ImagesType[]>([]);

  const [imagesChanged, setImagesChange] = useState<ImagesChanged[]>([]);
  // const [createDocument] = useMutation(CREATEDOCUMENT);
  // const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const _imgs = [];
    for (let _document of Documents) {
      _imgs.push(_document.url);
    }
    setImages(_imgs);
  }, [user]);

  // const handleCreateDocument = async (title: string, url: string) => {
  //   return await createDocument({
  //     variables: {
  //       title,
  //       url
  //     }
  //   });
  // };

  // const handleUpdateDocument = async (id: number, url: string) => {
  //   console.log('id', id);
  //   return await updateDocument({
  //     variables: {
  //       id,
  //       url
  //     }
  //   });
  // };

  const isValidToClick = () => {
    const hasSomethingChanged = imagesChanged.find((img) => {
      if (img) {
        return true;
      }
    });
    if (images.length == data?.config?.items?.length && hasSomethingChanged) {
      return true;
    }
  };

  const updateUser = (id: number, imgUrl: string) => {
    let newUser = user;
    let newDocs = [];

    console.log('--->>', id, imgUrl);
    user?.Documents?.map((item) => {
      if (item.id === id) {
        newDocs.push({ ...item, url: imgUrl });
      } else {
        newDocs.push(item);
      }
    });

    return { ...newUser, Documents: newDocs };
  };

  const handleDocumentUpload = async () => {
    setLoading(true);

    try {
      for (let i = 0; i < imagesChanged.length; i++) {
        if (imagesChanged[i]) {
          const toastDocumentTitle = data.config.items[i].name;
          const documentTitle = data.config.items[i].id;
          const imgUrl = await handleImageUpload(images[i]);

          const _document = Documents.find((document) => {
            if (document?.title.toLowerCase() === documentTitle.toLowerCase()) {
              return true;
            }
          });
          let userAllDocuments = user?.Documents;
          if (!userAllDocuments) {
            userAllDocuments = [];
          }

          if (_document) {
            console.log(_document);
            const resp = await handleUpdateDocument(_document.id, imgUrl);

            await dispatch(setOrUpdateUser(updateUser(_document.id, imgUrl)));
            toast.success(`${toastDocumentTitle} Updated`);

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
            toast.success(`${toastDocumentTitle} Uploaded`);
            userAllDocuments = [...userAllDocuments, resp.data.createDocument];

            const _user = { ...user };
            _user.Documents = userAllDocuments;
            dispatch(setOrUpdateUser(_user));
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
    const items = data?.config?.items;
    for (let i = 0; i < items?.length; i++) {
      views.push(
        <Button
          style={{
            cursor: 'pointer',
            marginTop: '10px'
          }}
          component="label"
          color={'primary'}
        >
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
      );
    }
    return views;
  };

  const getPreview = () => {
    const views: any = [];
    const items = data?.config?.items;

    for (let i = 0; i < items?.length; i++) {
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
      key={data?.config?.name}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          flexDirection: 'column'
        }
      }}
    >
      <TableCell component="th" scope="row">
        {data?.config?.name}
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
    </TableRow>
  );
};

export default DocumentRow;
