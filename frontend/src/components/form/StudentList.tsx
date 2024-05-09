import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import CreateStudent from './Create';
import { useGetStudent } from '../../api/student';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const StudentList = () => {
      const [open, setOpen] = useState(false);
      const { data, isLoading, isError } = useGetStudent(open);
      const [searchData, setSearchData] = useState("");
      const [searchValue, setSearchValue] = useState('')

      if (isLoading) {
            return <h1>Loading....</h1>
      };
      if (isError) {
            return <h1>Server Error!</h1>
      };
      const searchFunction = (e: any) => {
            let lowerCase = e.target.value.toLowerCase();
            setSearchData(lowerCase);
            setSearchValue(e.target.value);
      };
      const filterData = data?.data?.filter((item: any) => {
            if (searchData === "") {
                  return item;
            } else {
                  return item.name.toLowerCase().includes(searchData);
            }
      });
      const searchButton = () => {
            setSearchValue("")
      }
      return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5, }}>
                  <Box sx={{ width: "70vw" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, }}>
                              <Typography variant='h4' sx={{ fontFamily: "sans-serif" }}>Students List</Typography>
                              <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <input
                                          value={searchValue}
                                          type="text"
                                          placeholder='Enter Student Name'
                                          style={{ width: 200, height: 20, marginRight: 10, padding: 8 }}
                                          onChange={searchFunction}
                                    />
                                    <SearchIcon onClick={searchButton} sx={{ position: "absolute", ml: 22, "&&:active": { color: "skyblue" }, cursor: "pointer" }} />
                                    <Button sx={{ width: 'fit-content' }}
                                          variant='contained'
                                          color='success'
                                          onClick={() => setOpen(true)}
                                    >
                                          <AddIcon fontSize='small' /> create student
                                    </Button>
                              </Box>
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
                                          {filterData.map((row: any) => (
                                                <TableRow
                                                      key={row._id}
                                                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                      <TableCell sx={{ fontFamily: "sans-serif" }}>{row.name}</TableCell>
                                                      <TableCell sx={{ fontFamily: "sans-serif" }} align='right'>{row.classRoom}</TableCell>
                                                      <TableCell sx={{ fontFamily: "sans-serif" }} align='right'>{row.grade}</TableCell>
                                                      <TableCell sx={{ fontFamily: "sans-serif" }} align="right">
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
