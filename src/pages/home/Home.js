import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deletedUser, deleteUser, loadUser } from '../../redux/action/action';
import { useHistory } from 'react-router-dom';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  const useStyles = makeStyles({
    table: {
        marginTop:50,
      minWidth: 900,
    },
  });

  
const Home = () =>{

    const classes = useStyles();
   let dispatch = useDispatch();
   let history = useHistory();
   let {users} = useSelector(state =>state.dataReducer);
   console.log(users)
    useEffect(()=>{
        dispatch(loadUser())
    },[])

    const handleDelete = (id)=> {
      if(window.confirm("Are you sure ,you wanted to delete  user?")){
        dispatch(deleteUser(id));

      }
    }
  return (
    <TableContainer component={Paper}>
                                <Button style={{marginTop:'50px'}} variant="contained" color='primary ' onClick={()=>history.push('/addUser')}>Add User</Button>

      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {
             users && users?.map(user =>(
<StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user?.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user?.email}</StyledTableCell>

              <StyledTableCell align="center">{user?.contact}</StyledTableCell>
              <StyledTableCell align="center">{user?.location}</StyledTableCell>

                            <StyledTableCell align="center"> 
                            
                            <Button variant="contained" color="secondary" 
                            onClick={()=> handleDelete(user?.id)}>
Delete
</Button>
                                <Button variant="contained" color='primary' onClick={()=>history.push(`/editUser/${user?.id}`)}>Edit</Button>

                           
                              </StyledTableCell>

            </StyledTableRow>
      
             ))
         }
            
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Home;
