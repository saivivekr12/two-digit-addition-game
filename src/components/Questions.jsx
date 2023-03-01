
import { Box } from "@mui/material";
import { useGlobalContext } from "../context";

const Questions = ({ index }) => {
  let { data } = useGlobalContext();
  return (
    <Box sx={{textAlign:"center",m:2,fontSize:"32px",fontWeight:"bold"}}>
      {data[index].question} <span>=</span>
    </Box>
  );
};

export default Questions;
