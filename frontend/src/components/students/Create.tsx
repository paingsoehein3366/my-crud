import { Box, Button, Dialog, DialogContent, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import useStudent from "../../api/student";
import { fetcher } from "../../lib/axios";

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
      const [errorMessage, setErrorMessage] = useState();
      const { isLoading, data } = useStudent();

      const style = { mt: 2 };
      const textStyle = { color: "red", ml: 2, fontSize: 13, fontFamily: "sans-serif" }
      const createStudent = async () => {
            const errors = {}
            if (!studentData.name) {
                  errors.name = "Name is required!"
            } if (!studentData.age) {
                  errors.age = "Age is required!"
            } if (!studentData.grade) {
                  errors.grade = "Grade is required!"
            } if (!studentData.father) {
                  errors.father = "Name is required!"
            } if (!studentData.DadJob) {
                  errors.DadJob = "Job is required!"
            } if (!studentData.DadAge) {
                  errors.DadAge = "Age is required!"
            } if (!studentData.mother) {
                  errors.mother = "Name is required!"
            } if (!studentData.MonJob) {
                  errors.MonJob = "Job is required!"
            } if (!studentData.MonAge) {
                  errors.MonAge = "Age is required!"
            } if (!studentData.classRoom) {
                  errors.classRoom = "Class room is required!"
            }
            setFormErrors(errors);
            if (Object.keys(errors).length > 0) return;
            fetcher.post('/students', studentData).then(res => setOpen()).catch(err => console.log("error: ", err));
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
                              <Typography variant="h5" marginBottom="20px">Create Student</Typography >
                              <form >
                                    <Box sx={{ display: "flex", justifyContent: "center", marginY: 3 }}>
                                          <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <Typography>Student</Typography>
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
                                                <Typography>Father</Typography>
                                                <TextField sx={style} name="father" label="name" onChange={handleOnchange} />
                                                <Typography sx={textStyle}>{formErrors.father}</Typography>
                                                <TextField sx={style} name="DadAge" label="age" type="number" onChange={handleOnchange} />
                                                <Typography sx={textStyle}>{formErrors.DadAge}</Typography>
                                                <TextField sx={style} name="DadJob" label="job" onChange={handleOnchange} />
                                                <Typography sx={textStyle}>{formErrors.DadJob}</Typography>
                                          </Box>
                                          <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <Typography>Mother</Typography>
                                                <TextField sx={style} name="mother" label="name" onChange={handleOnchange} />
                                                <Typography sx={textStyle}>{formErrors.mother}</Typography>
                                                <TextField sx={style} name="MonAge" label="age" type="number" onChange={handleOnchange} />
                                                <Typography sx={textStyle}>{formErrors.MonAge}</Typography>
                                                <TextField sx={style} name="MonJob" label="job" onChange={handleOnchange} />
                                                <Typography sx={textStyle}>{formErrors.MonJob}</Typography>
                                          </Box>
                                    </Box>
                                    <Button variant="contained" color="success" onClick={createStudent}>create</Button>
                              </form>
                        </Box >
                  </DialogContent >
            </Dialog >
      )
};
export default CreateStudent;