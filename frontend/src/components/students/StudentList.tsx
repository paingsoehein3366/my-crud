import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import CreateStudent from './Create';
import useStudent from '../../api/student';
import AddIcon from '@mui/icons-material/Add';

const StudentList = () => {
      const [open, setOpen] = useState(false);
      const { data, isLoading, isError, error } = useStudent();

      if (isLoading) {
            return <h1>Loading....</h1>
      };

      return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5, }}>
                  <Box sx={{ width: "70vw" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                              <Typography variant='h4'>Students List</Typography>
                              <Button sx={{ width: 'fit-content' }}
                                    variant='contained'
                                    color='success'
                                    onClick={() => setOpen(true)}
                              >
                                    <AddIcon fontSize='small' /> create student
                              </Button>
                        </Box>
                        <TableContainer component={Paper} >
                              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                          <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell align="right">Class Room</TableCell>
                                                <TableCell align="right">Age</TableCell>
                                                <TableCell align='right'>information</TableCell>
                                          </TableRow>
                                    </TableHead>
                                    <TableBody>
                                          {data?.data.data.map((row: any) => (
                                                <TableRow
                                                      key={row.name}
                                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                      <TableCell >{row.name}</TableCell>
                                                      <TableCell align='right'>{row.classRoom}</TableCell>
                                                      <TableCell align='right'>{row.grade}</TableCell>
                                                      <TableCell align="right">
                                                            <Link to={`detail/${row._id}`}>Detail</Link>
                                                      </TableCell>
                                                </TableRow>
                                          ))}
                                    </TableBody>
                              </Table>
                        </TableContainer>
                        <CreateStudent open={open} setOpen={() => setOpen(false)} />
                  </Box>
            </Box>
      );
};
export default StudentList;
