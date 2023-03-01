import { Box, Typography } from '@mui/material'
import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';


const styleContainer={
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  height:"100vh",
  backgroundColor:"#00543C",
  color:"#fff",
}

const headingStyle={
  fontWeight:"500",
  fontSize:"24px",
  letterSpacing:1.2,
  mb:1
}

const mainHeadingStyle={
  fontWeight:"bold",
  fontSize:"32px",
  letterSpacing:1.5,
  mb:1
}

const playStyle = {
  backgroundColor:"#0047ab",
  padding:"15px 30px",
  display:"flex",
  flexDirection:"column",
  placeItems:"center",
  cursor:"pointer",
  mb:4,
}

const infoStyle={
  fontSize:"18px",
  letterSpacing:1.2,
  maxWidth:"390px",
  textAlign:"center"
}

const StartPage = () => {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/quiz")
  }
  return (
    <Box sx={styleContainer}>
      <Typography sx={headingStyle} component="div">Find the Match</Typography>
      <Typography sx={mainHeadingStyle} component="h1">2 Digit Addition</Typography>
      <Box sx={playStyle} onClick={handleNavigate}>
       <PlayArrowIcon fontSize="large"/>
        <p >Start</p>
      </Box>
      <Box component="p" sx={infoStyle}>Tap the matching answers to eliminate it.Repeat until all answers are   gone</Box>
    </Box>
  )
}

export default StartPage