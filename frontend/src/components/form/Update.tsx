import { Box, Button, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { QueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneStudent, useUpdateStudendent } from "../../api/student";
import { fetcher } from "../../lib/axios";
import { validationsSchema } from "../../schema/student.schema";

interface Prop {
      open: boolean,
      setOpen: () => void,
}

const Update = ({ open, setOpen, }: Prop) => {
      const param = useParams();
      const navigate = useNavigate();
      const { data, isLoading } = useGetOneStudent(param.id);
      const [studentData, setStudentData] = useState(data.data);
      const [formErrors, setFormErrors] = useState({});
      const updateMutation = useUpdateStudendent();
      console.log("studentData: ", studentData);

      const textStyle = { color: "red", fontSize: 13, fontFamily: "sans-serif" }
      const style = {
            mt: 2,
            fontFamily: "sans-serif",
            "& .MuiOutlinedInput-root": {
                  fontFamily: "sans-serif",
                  // Class for the border around the input field
                  "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#1876d2",
                        borderWidth: "1px",
                  },
            },
      };
      const client = new QueryClient();
      const update = () => {
            let student = studentData
            const errors = {};
            validationsSchema({ student, errors });
            setFormErrors(errors);
            if (Object.keys(errors).length > 0) return;
            updateMutation.mutate({ id: param.id, data: studentData }, {
                  onSuccess: () => {
                        client.invalidateQueries({
                              queryKey: ['students']
                        })
                        navigate('/')
                  },
                  onError: () => {
                        window.alert("error")
                  }
            })
      };

      return (
            <Dialog open={open} onClose={setOpen}>
                  <DialogContent>
                        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                              <Typography variant="h5" sx={{ fontFamily: "sans-serif" }}>Update Student</Typography >
                              <Box sx={{ display: "flex", justifyContent: "center", marginY: 3 }}>
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                          <Typography sx={style}>Student</Typography>
                                          <TextField defaultValue={studentData.name} sx={style} label="name" onChange={(e) => setStudentData({ ...studentData, name: e.target.value })} />
                                          <Typography sx={textStyle}>{formErrors.name}</Typography>
                                          <TextField defaultValue={studentData.age} sx={style} type="number" label="age" onChange={(e) => setStudentData({ ...studentData, age: Number(e.target.value) })} />
                                          <Typography sx={textStyle}>{formErrors.age}</Typography>
                                          <TextField defaultValue={studentData.grade} sx={style} label="grade" onChange={(e) => setStudentData({ ...studentData, grade: e.target.value })} />
                                          <Typography sx={textStyle}>{formErrors.grade}</Typography>
                                          <TextField defaultValue={studentData.classRoom} sx={style} label="class room" onChange={(e) => setStudentData({ ...studentData, classRoom: e.target.value })} />
                                          <Typography sx={textStyle}>{formErrors.classRoom}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column", marginX: 3 }}>
                                          <Typography sx={style}>Father</Typography>
                                          <TextField defaultValue={studentData.father} sx={style} label="name" onChange={(e) => setStudentData({ ...studentData, father: e.target.value })} />
                                          <Typography sx={textStyle}>{formErrors.father}</Typography>
                                          <TextField defaultValue={studentData.DadAge} sx={style} label="age" type="number" onChange={(e) => setStudentData({ ...studentData, DadAge: Number(e.target.value) })} />
                                          <Typography sx={textStyle}>{formErrors.DadAge}</Typography>
                                          <TextField defaultValue={studentData.DadJob} sx={style} label="job" onChange={(e) => setStudentData({ ...studentData, DadJob: e.target.value })} />
                                          <Typography sx={textStyle}>{formErrors.DadJob}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                          <Typography sx={style}>Mother</Typography>
                                          <TextField defaultValue={studentData.mother} sx={style} label="name" onChange={(e) => setStudentData({ ...studentData, mother: e.target.value })} />
                                          <Typography sx={textStyle}>{formErrors.mother}</Typography>
                                          <TextField defaultValue={studentData.MonAge} sx={style} label="age" type="number" onChange={(e) => setStudentData({ ...studentData, MonAge: Number(e.target.value) })} />
                                          <Typography sx={textStyle}>{formErrors.MonAge}</Typography>
                                          <TextField defaultValue={studentData.MonJob} sx={style} label="job" onChange={(e) => setStudentData({ ...studentData, MonJob: e.target.value })} />
                                          <Typography sx={textStyle}>{formErrors.MonJob}</Typography>
                                    </Box>
                              </Box>
                              <Button variant="contained" onClick={update}>update</Button>
                        </Box >
                  </DialogContent>
            </Dialog >
      )
};
export default Update;