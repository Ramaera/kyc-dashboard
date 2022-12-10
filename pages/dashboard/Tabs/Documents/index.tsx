import {
  Grid,
  Box,
  useTheme,
  Divider,
  TextField,
  Button,
  Typography,
  Badge
} from '@mui/material';
import { Dropdown } from "primereact/dropdown";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
import TeamOverview from '@/content/Dashboards/Tasks/TeamOverview';
import TasksAnalytics from '@/content/Dashboards/Tasks/TasksAnalytics';
import Performance from '@/content/Dashboards/Tasks/Performance';
import Projects from '@/content/Dashboards/Tasks/Projects';
import Checklist from '@/content/Dashboards/Tasks/Checklist';
import Profile from '@/content/Dashboards/Tasks/Profile';
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    name: 'Passport Size Photo',
    status: -1,
    id: 'photo'
  },
  {
    name: 'Aadhar Card',
    status: -1,
    id: 'aadhar',
    twoSides: true
  },
  {
    name: 'Pan Card',
    status: -1,
    id: 'pan',
  }
];

const DocumentRow = ({ data }) => {

  const [front,setFront]= useState()
  const [back,setBack]= useState()

  const getBadge = (status) => {
    let msg = 'Upload';
    if (status != -1) {
      msg = 'Pending';
    }
    return <Badge badgeContent={msg} color="secondary"></Badge>;
  };

  const getActionCell = () => {
    if (data.twoSides) {
      return (
        <>

          <Button   component="label">Choose Front
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
          </Button>
          <Button  component="label">Choose Back   <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                if (f.target.files.length > 0) {
                  setBack(URL.createObjectURL(f.target.files[0]));
                }
              }}
            /></Button>
        </>
      );
    } else {
      return <Button component="label">Choose  <input
      type="file"
      accept="image/*"
      hidden
      onChange={(f) => {
        if (f.target.files.length > 0) {
          setFront(URL.createObjectURL(f.target.files[0]));
        }
      }}
    /></Button>;
    }
  };



  const getPreview=()=>{
    const views:any =[]
    

    if(front){
      views.push(<img src={front} height={100} width={100}/>)
    }


    if(back){
      views.push(<img src={back}  height={100} width={100}/>)
    }

    
    if(views.length ==0){
      return  <Typography variant="subtitle1">
     No Document
    </Typography>
    }

    return views
  }

  return (
    <TableRow
      key={data.name}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {data.name}
      </TableCell>

      <TableCell>{getPreview()}</TableCell>

      <TableCell>{getActionCell()}</TableCell>
      <TableCell><Button variant='contained' disabled={!(data.twoSides?front && back:front)}>
        Upload</Button></TableCell>

      <TableCell>{getBadge(data.status)}</TableCell>
    </TableRow>
  );
};


const AdditionalDocument = ()=>{
  const [selectedAdditionalDocument,setSelectedAdditionalDocument] = useState()
  const [selectedDocument,setSelectedDocument] = useState()

  const additionalDocumentsList =  [
    { name: 'Voter Id Card', code: 'voterId' },
    { name: 'Passbook', code: 'PB' },
    { name: 'Driving License', code: 'DL' },
  ];

  const renderActionPanel = ()=>{
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

         {selectedDocument? <Button 
                   variant='contained'
          style={{marginLeft:2}}
          component="label">Upload Document
          <input
              type="file"
              accept="image/*"
              hidden
              onChange={(f) => {
                // if (f.target.files.length > 0) {
                //   setFront(URL.createObjectURL(f.target.files[0]));
                // }
              }}
            />
          </Button>:null}
    </Grid>
  }
  return   <>
   <Typography variant="h4" sx={{ my: 2 ,mt:2}}>
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
    
{selectedDocument?<img src={selectedDocument} height={200} width={200}/>
:null}
    {renderActionPanel()}
    
    </>
}
const DocumentTab = () => {
  const theme = useTheme();

  
  
 

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
              <DocumentRow data={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

              <AdditionalDocument/>
  
    </>
  );
};
export default DocumentTab;
