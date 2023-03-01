import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import './styles.css'
import useTimer from '../hooks/useTimer';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  bgcolor: '#343434',
  boxShadow: 24,
  p: 2,
  textAlign:"center"
};

export default function TransitionsModal({open,score,liveCount,index}) {
  let  count;
  const navigate = useNavigate();
  const {minutes,seconds} = useTimer(liveCount,index);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{backgroundColor:"rgba(255,255,255,1)"}}
      >
        <Fade in={open}>
          <Box sx={style} >
            <Typography id="transition-modal-title"  component="p" sx={{color:"#aaa",mb:1}}>
              Game Over
            </Typography>
            <Divider sx={{border:"2px solid rgba(0,0,0,0.6)",mb:1
          }}/>
             <Box sx={{display:"flex",color:"#fff",mb:1,justifyContent:"center"}}>
              <Box sx={{mr:2}}>
                <p className='heading'>Score</p>
                <p className='text'>{score}</p>
              </Box>
              <Box>
                <p className="heading">Time</p>
                <p className='text'>{`${minutes.toString().padStart(2, '0')} m :${seconds.toString().padStart(2, '0')} s`}</p>
              </Box>
             </Box>
             <Divider  sx={{border:"2px solid rgba(0,0,0,0.6)",mb:1
          }} />
          <Box component="p" color="#ccc" sx={{cursor:"pointer"}} onClick={()=>navigate("/")}>Start again</Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}