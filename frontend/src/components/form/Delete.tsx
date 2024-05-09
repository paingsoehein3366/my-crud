import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material"
import { QueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useDeleteStudent } from "../../api/student";
import { fetcher } from "../../lib/axios";

interface Prop {
      open: boolean,
      setOpen: () => void
}
const Delete = ({ open, setOpen }: Prop) => {
      const params = useParams();
      const navigate = useNavigate();
      const client = new QueryClient();
      const useMutation = useDeleteStudent();
      const deleteFunction = async () => {
            // await fetcher.delete(`/students/${param.id}`)
            //       .then(res => navigate('/students'))
            //       .catch(err => console.log(err));
            useMutation.mutate({ id: params.id }, {
                  onSuccess: () => {
                        client.invalidateQueries({
                              queryKey: ['students']
                        })
                        navigate('/');
                  },
                  onError: () => {
                        window.alert('error');
                  }
            })
      };
      return (
            <Dialog open={open} onClose={setOpen}>
                  <DialogTitle sx={{ fontFamily: "sans-serif" }}>Are you sure you want to delete?</DialogTitle>
                  <DialogContent sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Button variant="outlined" onClick={setOpen}>cencel</Button>
                        <Button variant="contained" color="error" onClick={deleteFunction}>delete</Button>
                  </DialogContent>
            </Dialog>
      )
};
export default Delete;