import Button from "@mui/material/Button";
import { useGlobalContext } from "../context";
import "./styles.css";
import { useEffect, useState } from "react";
import { shuffleArray } from "../utilties/shuffleArray";

const Answers = ({handleCorrectAnswers}) => {
  const {data} = useGlobalContext();
  const[shuffledAnswersData,setshuffledAnswersData] = useState([]);
      
  useEffect(()=>{
    setshuffledAnswersData(shuffleArray(data))
  },[])

  return (
    <div className="button-container">
      {shuffledAnswersData.map((answer) => (
        <Button
          variant="contained"
          sx={{ width: "150px", padding: "8px", marginRight: "10px",backgroundColor:`${answer.color}`, fontWeight:"bold" ,color:"#fff",fontSize:"20px"}}
          onClick={()=>handleCorrectAnswers(answer)}
          key={answer.id}

        >
          {answer.answer}
        </Button>
      ))}
    </div>
  );
};

export default Answers;
