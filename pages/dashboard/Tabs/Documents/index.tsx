import { CREATEDOCUMENT, UPDATEDOCUMENT } from '@/apollo/queries/auth';
import documentsConfig from '@/config/documentsConfig';
import { useAppSelector } from '@/hooks';
import DocumentType from '@/state/types/document';
import handleImageUpload from '@/utils/upload';
import { useMutation } from '@apollo/client';
import { LoadingButton } from '@mui/lab';
import { Badge, Button, Typography } from '@mui/material';
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
    status: -1,
    isOptional: true
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
const DocumentRow = ({ data, documents = [] }) => {
  const [images, setImages] = useState([]);
  const [imagesChanged, setImagesChange] = useState([]);
  const [createDocument] = useMutation(CREATEDOCUMENT);
  const [updateDocument] = useMutation(UPDATEDOCUMENT);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const _imgs = [];
    for (let _document of documents) {
      _imgs.push(_document.url);
    }
    setImages(_imgs);
  }, [documents]);
  const getBadge = (status) => {
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
  };
  const handleCreateDocument = async (title: string, url: string) => {
    await createDocument({
      variables: {
        title,
        url
      }
    });

    toast.success(`${title} Uploaded`);
  };

  const handleUpdateDocument = async (
    id: string,
    title: string,
    url: string
  ) => {
    await updateDocument({
      variables: {
        id,
        title,
        url
      }
    });

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

    console.log({ imagesChanged, images });
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
            console.log({ imgUrl });
            await handleUpdateDocument(_document.id, documentTitle, imgUrl);
            // location.reload()
          } else {
            //create document
            await handleCreateDocument(documentTitle, imgUrl);
            // location.reload()
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
      views.push(
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

      <TableCell>{documents[0].status}</TableCell>
    </TableRow>
  );
};
const DocumentTab = () => {
  const user = useAppSelector((state) => state.user.data);
  const getDocumentsByConfig = (configs) => {
    const documents = [];
    if (user && user.documents) {
      for (let config of configs) {
        const document = user.documents.find((doc: DocumentType) => {
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
