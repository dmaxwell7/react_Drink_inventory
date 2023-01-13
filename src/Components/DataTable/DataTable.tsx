import React, {useState} from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData} from '../../Custom-Hooks';
import { server_calls } from '../../Api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { DrinkForm } from '../DrinkForm';

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90, hide: true },
  {field: 'name', headerName: 'Drink Name', flex: 1},
  {field: 'make', headerName: 'Make', flex: 1},
  {field: 'price', headerName: 'Price', flex: 1},
  {field: 'aged', headerName: 'Aged', flex:2},
];

interface gridData {
  data: {
    id?: string
  }
}

export const DataTable = () => {

  let {drinksData, getData } = useGetData();
  let [ open, setOpen ] = useState(false);
  let [ gridData, setData ] = useState<gridData>({data:{}})
  const [ selectionModel, setSelectionModel ] = useState<any>([]);

  let handleOpen = () => {
    setOpen(true)
  };

  let handleClose = () => {
    setOpen(false)
  };

  let deleteData = () => {
    server_calls.delete(selectionModel);
    getData();
    setTimeout( () => {window.location.reload(); }, 1000)
  };

  // console.log(gridData.data.id!);
  // console.log(`testing for data ${contactData}`)


  return (
    <div style={{ height: 400, width: '100%'}}>
      <h2>My Drinks</h2>

    <DataGrid rows={drinksData} columns={ columns } pageSize={ 5 } checkboxSelection={true}
    onSelectionModelChange={ (item) => {
      setSelectionModel(item)
    }} />

    <Button onClick={handleOpen}>Update</Button>
    <Button variant='contained' color='secondary' onClick={deleteData}>Delete</Button>

    {/* Dialog pop-up */}
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Drink {selectionModel}</DialogTitle>
        <DialogContent>
            <DialogContentText>Update Drink</DialogContentText>
              <DrinkForm id={selectionModel!} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleClose} color="primary">Done</Button>
        </DialogActions>
    </Dialog>
    </div>
  )
}
