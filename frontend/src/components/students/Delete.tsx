import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom";
import { fetcher } from "../../lib/axios";

interface Prop {
      open: boolean,
      setOpen: () => void
}
const Delete = ({ open, setOpen }: Prop) => {
      const param = useParams();
      const navigate = useNavigate();
      const deleteFunction = async () => {
            await fetcher.delete(`/students/${param.id}`)
                  .then(res => navigate('/students'))
                  .catch(err => console.log(err));
      };
      return (
            <Dialog open={open} onClose={setOpen}>
                  <DialogTitle>Are you sure you want to delete?</DialogTitle>
                  <DialogContent sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Button variant="outlined" onClick={setOpen}>cencel</Button>
                        <Button variant="contained" color="error" onClick={deleteFunction}>delete</Button>
                  </DialogContent>
            </Dialog>
      )
};
export default Delete;