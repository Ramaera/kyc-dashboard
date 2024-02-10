import DocumentType from '@/state/types/document';
import { Hidden, Typography, useTheme } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { rows } from './documentData';
import DocumentRow from './DocumentRow';
import { useAppSelector } from '@/hooks';

const Document = () => {
  const user = useAppSelector((state) => state.user?.data);

  const getDocumentsByConfig = (configs: any) => {
    const documents = [];
    if (user && user?.Documents) {
      for (let config of configs) {
        const document = user?.Documents?.find((doc: DocumentType) => {
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
        Upload Documents
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Document Name</TableCell>
              <Hidden smDown>
                <TableCell>Preview</TableCell>
                <TableCell style={{ padding: '0 0 0 2rem' }}>Action</TableCell>
                <TableCell style={{ padding: '0 0 0 2rem' }}>
                  Upload Action
                </TableCell>
              </Hidden>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <DocumentRow
                data={row}
                key={index}
                user={user}
                Documents={getDocumentsByConfig(row?.config?.items)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Document;
