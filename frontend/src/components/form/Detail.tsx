import { Box, Button, Card, CardActions, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Delete from "./Delete";
import Update from "./Update";
import { useGetOneStudent, useGetStudent } from "../../api/student";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Detail = () => {
      const param = useParams();
      const navigate = useNavigate();
      const [open, setOpen] = useState(false);
      const [update, setUpdate] = useState(false);
      const { data, isLoading } = useGetOneStudent(param.id);

      if (isLoading) {
            return <h1>Loading....</h1>
      };
      const style = {
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "Arial"
      };
      const fontFamily = { fontFamily: "sans-serif" }
      const textStyle = { borderBottom: "1px solid green", fontFamily: "sans-serif" }

      return (
            <Box>
                  <Box sx={{ display: "flex", justifyContent: "end", mt: 3, mr: 3 }}>
                        <Button variant="outlined" onClick={() => navigate('/')}>back</Button>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "center", height: "80vh", alignItems: "center", flexDirection: "column" }}>
                        <Card key={data?.data._id} sx={{ width: 300, display: "flex", flexDirection: "column", alignItems: "center", paddingY: 2 }}>
                              <CardMedia><AccountCircleIcon sx={{ fontSize: 200, color: "gray" }} /></CardMedia>
                              <Typography sx={{ borderBottom: "1px solid gray", width: 270, height: 1, mb: 1 }}></Typography>
                              <CardActions sx={{ display: "flex", justifyContent: "space-between", width: "70%" }}>
                                    <Box sx={{ display: "flex", flexDirection: "column", color: "#484747" }}>
                                          <Typography sx={fontFamily}>Student Name</Typography>
                                          <Typography sx={fontFamily}>Student Age</Typography>
                                          <Typography sx={textStyle}>Grade</Typography>
                                          <Typography sx={fontFamily}>Father</Typography>
                                          <Typography sx={fontFamily}>Age</Typography>
                                          <Typography sx={textStyle}>Job</Typography>
                                          <Typography sx={fontFamily}>Mother</Typography>
                                          <Typography sx={fontFamily}>Age</Typography>
                                          <Typography sx={textStyle}>Job</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                          <Typography sx={fontFamily}>: {data?.data.name}</Typography>
                                          <Typography sx={fontFamily}>: {data?.data.age}</Typography>
                                          <Typography sx={textStyle}>: {data?.data.grade}</Typography>
                                          <Typography sx={fontFamily}>: {data?.data.father}</Typography>
                                          <Typography sx={fontFamily}>: {data?.data.DadAge}</Typography>
                                          <Typography sx={textStyle}>: {data?.data.DadJob}</Typography>
                                          <Typography sx={fontFamily}>: {data?.data.mother}</Typography>
                                          <Typography sx={fontFamily}>: {data?.data.MonAge}</Typography>
                                          <Typography sx={textStyle}>: {data?.data.MonJob}</Typography>
                                    </Box>
                              </CardActions>
                        </Card>

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