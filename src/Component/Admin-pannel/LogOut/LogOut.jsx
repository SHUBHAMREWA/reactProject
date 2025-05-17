
import { Box, Button, Typography, Container } from '@mui/material';
import { useAnimate } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOutRequest } from '../../Login/login.action';

const LogOut =()=>{

    const dispatch = useDispatch()
    const adminReducer  = useSelector(res=>res.adminReducer)
    
    const navigate = useNavigate()


    const handleConfirm =()=>{
          dispatch(logOutRequest())
    }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: adminReducer.dark ? "black"  : "white", // yellow to light orange
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: adminReducer.dark ? " #1d1d1d" : "white",
          borderRadius: 3,
          boxShadow: 5,
          textAlign: 'center',
          py: 5,
        }}
      >
        <Typography
        color='primary'
         variant="h5" mb={3} fontWeight="bold">
         Confirm To LogOut
        </Typography>
        <Button
          variant="contained"
          onClick={handleConfirm}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: '16px',
            borderRadius: 3,
            background: 'red',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              background: 'linear-gradient(to right,rgb(223, 14, 76),rgb(144, 17, 17))',
            },
          }}
        >
          Confirm
        </Button>
      </Container>
    </Box>
  );
};


export default LogOut;

