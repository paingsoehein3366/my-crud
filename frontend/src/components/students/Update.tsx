import { Box, Button, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useStudent from "../../api/student";
import { fetcher } from "../../lib/axios";
import { } from 'formik';

interface Prop {
      open: boolean,
      setOpen: () => void,
}

const Update = ({ open, setOpen }: Prop) => {
      const param = useParams();
      const navigate = useNavigate();
      const { data, isLoading } = useStudent();
      const checkData = data?.data.data.filter((item: any) => item._id === param.id);
      const [studentData, setStudentData] = useState({});
      const style = {
            mt: 2
      };
      const update = async () => {
            fetcher.patch(`/students/${param.id}`, studentData)
                  .then(res => navigate('/students'))
                  .catch(err => console.log("create student error: ", err));
      };

      return (
            <Dialog open={open} onClose={setOpen}>
                  <DialogContent>
                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                              <Typography variant="h5" marginBottom="20px">Create Student</Typography >
                              {checkData?.map((item: any) => {
                                    return (
                                          <Box key={item._id} sx={{ display: "flex", justifyContent: "center", marginY: 3 }}>
                                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                      <Typography>Student</Typography>
                                                      <TextField defaultValue={item.name} sx={style} label="name" onChange={(e) => setStudentData({ ...studentData, name: e.target.value })} />
                                                      <TextField defaultValue={item.age} sx={style} type="number" label="age" onChange={(e) => setStudentData({ ...studentData, age: Number(e.target.value) })} />
                                                      <TextField defaultValue={item.grade} sx={style} label="grade" onChange={(e) => setStudentData({ ...studentData, grade: e.target.value })} />
                                                      <TextField defaultValue={item.classRoom} sx={style} label="class room" onChange={(e) => setStudentData({ ...studentData, classRoom: e.target.value })} />
                                                </Box>
                                                <Box sx={{ display: "flex", flexDirection: "column", marginX: 3 }}>
                                                      <Typography>Father</Typography>
                                                      <TextField defaultValue={item.father} sx={style} label="name" onChange={(e) => setStudentData({ ...studentData, father: e.target.value })} />
                                                      <TextField defaultValue={item.DadAge} sx={style} label="age" type="number" onChange={(e) => setStudentData({ ...studentData, DadAge: Number(e.target.value) })} />
                                                      <TextField defaultValue={item.DadJob} sx={style} label="job" onChange={(e) => setStudentData({ ...studentData, DadJob: e.target.value })} />
                                                </Box>
                                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                      <Typography>Mother</Typography>
                                                      <TextField defaultValue={item.mother} sx={style} label="name" onChange={(e) => setStudentData({ ...studentData, mother: e.target.value })} />
                                                      <TextField defaultValue={item.MonAge} sx={style} label="age" type="number" onChange={(e) => setStudentData({ ...studentData, MonAge: Number(e.target.value) })} />
                                                      <TextField defaultValue={item.MonJob} sx={style} label="job" onChange={(e) => setStudentData({ ...studentData, MonJob: e.target.value })} />
                                                </Box>
                                          </Box>
                                    )
                              })}
                              <Button variant="contained" onClick={update}>update</Button>
                        </Box >
                  </DialogContent>
            </Dialog >
      )
};
export default Update;