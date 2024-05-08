import { Box, Button, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import useStudent from "../../api/student";
import { fetcher } from "../../lib/axios";
import { validationsSchema } from "../../schema/student.schema";
import { studentInfo } from "../../typing/type";

interface Prop {
      open: boolean,
      setOpen: () => void,
};

const CreateStudent = ({ open, setOpen }: Prop) => {
      const [studentData, setStudentData] = useState({
            name: "",
            age: "",
            grade: "",
            classRoom: "",
            mother: "",
            MonAge: "",
            MonJob: "",
            father: "",
            DadAge: "",
            DadJob: "",
      });
      const [formErrors, setFormErrors] = useState({});
      const [errorMessage, setErrorMessage] = useState({});
      const { isLoading, data } = useStudent();

      const style = { mt: 2, fontFamily: "sans-serif" };
      const textStyle = { color: "red", fontSize: 13, fontFamily: "sans-serif" }
      const createStudent = async () => {
            let student = studentData;
            const errors = {}
            validationsSchema({ student, errors });
            setFormErrors(errors);
            if (Object.keys(errors).length > 0) return;
            fetcher.post('/students', studentData)
                  .then(res => setOpen())
                  .catch(err => alert(err.response.data.message));
      };

      const handleOnchange = (e: any) => {
            const { name, value } = (e.target);
            setStudentData({ ...studentData, [name]: value });
            console.log("name:", name, "value:", value);
      };

      return (
            <Dialog open={open} onClose={setOpen}>
                  <DialogContent>
                        <form action=""></form><Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
                              <Typography variant="h5" sx={style} >Create Student</Typography >
                              <Box sx={{ display: "flex", justifyContent: "center", marginY: 3, }}>
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                          <Typography sx={style}>Student</Typography>
                                          <TextField sx={style} name="name" label="name" onChange={handleOnchange} />
                                          <Typography sx={textStyle}>{formErrors.name}</Typography>
                                          <TextField sx={style} name="age" type="number" label="age" onChange={handleOnchange} />
                                          <Typography sx={textStyle}>{formErrors.age}</Typography>
                                          <TextField sx={style} name="grade" label="grade" onChange={handleOnchange} />
                                          <Typography sx={textStyle}>{formErrors.grade}</Typography>
                                          <TextField sx={style} name="classRoom" label="class room" onChange={handleOnchange} />
                                          <Typography sx={textStyle}>{formErrors.classRoom}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column", marginX: 3 }}>
                                          <Typography sx={style}>Father</Typography>
                                          <TextField sx={style} name="father" label="name" onChange={handleOnchange} />
                                          <Typography sx={textStyle}>{formErrors.father}</Typography>
                                          <TextField sx={style} name="DadAge" label="age" type="number" onChange={handleOnchange} />
                                          <Typography sx={textStyle}>{formErrors.DadAge}</Typography>
                                          <TextField sx={style} name="DadJob" label="job" onChange={handleOnchange} />
                                          <Typography sx={textStyle}>{formErrors.DadJob}</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                                          <Typography sx={style}>Mother</Typography>
                                          <TextField sx={style} name="mother" label="name" onChange={handleOnchange} />
                                          <Typography sx={textStyle}>{formErrors.mother}</Typography>
                                          <TextField sx={style} name="MonAge" label="age" type="number" onChange={handleOnchange} />
                                          <Typography sx={textStyle}>{formErrors.MonAge}</Typography>
                                          <TextField sx={style} name="MonJob" label="job" onChange={handleOnchange} />
                                          <Typography sx={textStyle}>{formErrors.MonJob}</Typography>
                                    </Box>
                              </Box>
                              <Button variant="contained" color="success" onClick={createStudent}>create</Button>
                        </Box >
                  </DialogContent >
            </Dialog >
      )
};
export default CreateStudent;