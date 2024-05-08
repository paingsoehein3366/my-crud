import { Box, Button, Card, CardActions, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Delete from "./Delete";
import Update from "./Update";
import useStudent from "../../api/student";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Detail = () => {
      const param = useParams();
      const navigate = useNavigate();
      const [open, setOpen] = useState(false);
      const [update, setUpdate] = useState(false);
      const { data, isLoading } = useStudent();

      const checkData = data?.data.data.filter((item: any) => item._id === param.id);
      if (isLoading) {
            return <h1>Loading....</h1>
      };
      const style = {
            display: "flex",
            justifyContent: "space-between"
      };
      const textStyle = { borderBottom: "1px solid" }

      return (
            <Box>
                  <Box sx={{ display: "flex", justifyContent: "end", mt: 3, mr: 3 }}>
                        <Button variant="outlined" onClick={() => navigate('/students')}>back</Button>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center", height: "80vh", alignItems: "center", flexDirection: "column" }}>
                        {checkData?.map((item: any) => {
                              return (
                                    <Card key={item._id} sx={{ width: 300, display: "flex", flexDirection: "column", alignItems: "center", paddingY: 2 }}>
                                          <CardMedia><AccountCircleIcon sx={{ fontSize: 200 }} /></CardMedia>
                                          <CardActions sx={{ display: "flex", justifyContent: "space-between", width: "70%" }}>
                                                <Box sx={{ display: "flex", flexDirection: "column", }}>
                                                      <Typography >Student Name</Typography>
                                                      <Typography >Student Age</Typography>
                                                      <Typography sx={textStyle}>Grade</Typography>
                                                      <Typography >Father</Typography>
                                                      <Typography >Age</Typography>
                                                      <Typography sx={textStyle}>Job</Typography>
                                                      <Typography >Mother</Typography>
                                                      <Typography >Age</Typography>
                                                      <Typography sx={textStyle}>Job</Typography>
                                                </Box>
                                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                      <Typography >: {item.name}</Typography>
                                                      <Typography >: {item.age}</Typography>
                                                      <Typography sx={textStyle}>: {item.grade}</Typography>
                                                      <Typography >: {item.father}</Typography>
                                                      <Typography >: {item.DadAge}</Typography>
                                                      <Typography sx={textStyle}>: {item.DadJob}</Typography>
                                                      <Typography >: {item.mother}</Typography>
                                                      <Typography >: {item.MonAge}</Typography>
                                                      <Typography sx={textStyle}>: {item.MonJob}</Typography>
                                                </Box>
                                          </CardActions>
                                    </Card>
                              )
                        })}
                        <Box sx={{ display: "flex", justifyContent: "space-around", width: 300, mt: 2 }}>
                              <Button variant="contained" color="error" onClick={() => setOpen(true)} >delete</Button>
                              <Button variant="contained" onClick={() => setUpdate(true)} >update</Button>
                        </Box>
                  </Box>
                  <Update open={update} setOpen={() => setUpdate(false)} />
                  <Delete open={open} setOpen={() => setOpen(false)} />
            </Box>
      )
};
export default Detail;