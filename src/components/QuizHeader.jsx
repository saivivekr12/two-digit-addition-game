import { Box } from '@mui/material'
import React from 'react'
import useTimer from '../hooks/useTimer'
import './styles.css'
import FavoriteIcon from '@mui/icons-material/Favorite';


const QuizHeader = ({score,liveCount}) => {
  const {minutes,seconds } = useTimer(3);
  return (
    <div className='header'>
    <Box sx={{fontWeight:"bold",fontSize:"24px"}}>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</Box>
    <Box sx={{display:"flex",alignItems:"center"}}>
       { liveCount>=0&& [...Array(liveCount)].fill(0).map(count=>{
        return (
          <FavoriteIcon />
        )
       })}
      <p>{score}</p></Box>
    </div>
  )
}

export default QuizHeader