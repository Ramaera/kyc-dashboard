import {
  Grid,
  useTheme,
  Button,
  Typography,
  Badge
} from '@mui/material';
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useMutation } from '@apollo/client';
import { CREATEDOCUMENT, UPDATEDOCUMENT } from '@/apollo/queries/auth';
import { useAppSelector } from '@/hooks';
import documentsConfig from '@/config/documentsConfig';
import DocumentType from '@/state/types/document';
import { LoadingButton } from '@mui/lab';

const rows = [
  {
    config: documentsConfig.avatar,
    status: -1,
  },
  {
    config: documentsConfig.aadhar,
    status: -1,
  },
  {
    config: documentsConfig.pancard,
    status: -1,
  },
];

const DocumentRow = ({ data, documents = [] }) => {
  const [images, setImages] = useState([]);
  const [imagesChanged, setImagesChange] = useState([]);

  const [createDocument] = useMutation(CREATEDOCUMENT)
  const [updateDocument] = useMutation(UPDATEDOCUMENT)

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const _imgs = []
    for (let _document of documents) {
      _imgs.push(_document.url)
    }

    setImages(_imgs)
  }, [documents])

  const getBadge = (status) => {
    let msg = 'Upload';
    if (status != -1) {
      msg = 'Pending';
    }
    return <Badge badgeContent={msg} color="secondary"></Badge>;
  };
  const handleImageUpload = async () => {
    return "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Einstein_tongue.jpg/220px-Einstein_tongue.jpg"
  }

  const handleCreateDocument = async (title: string, url: string) => {
    await createDocument({
      variables: {
        title,
        url
      }
    })
  }

  const handleUpdateDocument = async (id: string, title: string, url: string) => {
    await updateDocument({
      variables: {
        id,
        title,
        url
      }
    })
  }


  const isValidToClick = ()=>{
    const hasSomethingChanged = imagesChanged.find((img)=>{
      if(img){
        return true
      }
    })
    if(images.length == data.config.items.length &&  hasSomethingChanged){
      return true
    }
  }


  const handleDocumentUpload = async () => {


    setLoading(true)

    //handle upload 

  
    try{
      for (let i = 0; i < imagesChanged.length; i++) {
        if (imagesChanged[i]) {
          const imgUrl = await handleImageUpload();
          const documentTitle = data.config.items[i].id;
  
          const _document = documents.find((document) => {
            if (document.title.toLowerCase() === documentTitle.toLowerCase()) {
              return true
            }
          })
          if (_document) {
            //updateDocument
            await handleUpdateDocument(_document.id, documentTitle, imgUrl);
  
          } else {
            //create document
            await handleCreateDocument(documentTitle, imgUrl);
          }
  
          console.log({ _document })
  
        }
      }
    }catch(err){
      
    }

    setLoading(false)
  }

  const getActionCell = () => {
    const views = []

    const items = data.config.items
    for (let i = 0; i < items.length; i++) {
      views.push(<Button component="label">Choose {items[i].name}
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(f) => {
            if (f.target.files.length > 0) {
              const _images = [...images];
              _images[i] = URL.createObjectURL(f.target.files[0])
              setImages(_images);
              const _imagesChanged = [...imagesChanged]
              _imagesChanged[i] = true
              setImagesChange(_imagesChanged)
            }
          }}
        />
      </Button>)
    }
    return views
  };
  const getPreview = () => {


    const views: any = []
    const items = data.config.items
    for (let i = 0; i < items.length; i++) {
      const _img = images[i];
      if (_img) {
        views.push(<img src={_img} height={100} width={100} />)

      }

    }
    if (views.length == 0) {
      return <Typography variant="subtitle1">
        No Document
      </Typography>
    }
    return views
  }
  return (
    <TableRow
      key={data.config.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {data.config.name}
      </TableCell>

      <TableCell>{getPreview()}</TableCell>

      <TableCell>{getActionCell()}</TableCell>
      <TableCell><LoadingButton
        loading={isLoading}
        disabled={!isValidToClick()}
        variant='contained'
        onClick={() => {
          handleDocumentUpload();
        }}
      >
        Upload</LoadingButton></TableCell>

      <TableCell>{getBadge(data.status)}</TableCell>
    </TableRow>
  );
};

const DocumentTab = () => {
  const theme = useTheme();

  const user = useAppSelector(state => state.user.data)



  const getDocumentsByConfig = (configs) => {
    const documents = []
    if (user && user.documents) {

      for (let config of configs) {
        const document = user.documents.find((doc) => {
          if (doc.title.toLowerCase() === config.id.toLowerCase()) {
            return true
          }
        })
        if (document) {
          documents.push(document);
        }
      }
    }


    return documents;

  }



  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        Kindly Upload the documents requested below
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Document Name</TableCell>
              <TableCell>Preview</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>Upload Action</TableCell>

              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <DocumentRow data={row} documents={getDocumentsByConfig(row.config.items)} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AdditionalDocument />

    </>
  );
};


const AdditionalDocument = () => {
  const [selectedAdditionalDocument, setSelectedAdditionalDocument] = useState()
  const [selectedDocument, setSelectedDocument] = useState()
  const additionalDocumentsList = [
    { name: 'Voter Id Card', code: 'voterId' },
    { name: 'Passbook', code: 'PB' },
    { name: 'Driving License', code: 'DL' },
  ];
  const renderActionPanel = () => {
    return <Grid mt={2}>
      <Button
        disabled={!selectedAdditionalDocument}
        variant='contained'
        component="label">Choose Document
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(f) => {
            if (f.target.files.length > 0) {
              setSelectedDocument(URL.createObjectURL(f.target.files[0]));
            }
          }}
        />
      </Button>

      {selectedDocument ? <Button
        variant='contained'
        style={{ marginLeft: 2 }}
        component="label">Upload Document
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={(f) => {
            if (f.target.files.length > 0) {
              setFront(URL.createObjectURL(f.target.files[0]));
            }
          }}
        />
      </Button> : null}
    </Grid>
  }
  return <>
    <Typography variant="h4" sx={{ my: 2, mt: 2 }}>
      Additional Document
    </Typography>
    <Dropdown
      value={selectedAdditionalDocument}
      options={additionalDocumentsList}
      filter
      showClear
      onChange={(item) => {
        setSelectedAdditionalDocument(item.value);
      }}
      optionLabel="name"
      editable
    />

    {selectedDocument ? <img src={selectedDocument} height={200} width={200} />
      : null}
    {renderActionPanel()}

  </>
}

export default DocumentTab;

