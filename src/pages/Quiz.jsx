import { useEffect, useState } from "react";
import Answers from "../components/Answers";
import TransitionsModal from "../components/Modal";
import Questions from "../components/Questions";
import QuizHeader from "../components/QuizHeader";
import SimpleSnackbar from "../components/Snackbar";
import { useGlobalContext } from "../context";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [liveCount, setLiveCount] = useState(3);
  const [score, setScore] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    severity: "success",
  });

  const [openModal, setOpenModal] = useState(false);
  const { data } = useGlobalContext();

  useEffect(() => {
    if (liveCount === 0) setOpenModal(true);
  }, [liveCount]);


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleCorrectAnswers = (ans) => {
    if (ans.id === data[index].id) {
      setScore((score) => score + 1);
      setOpenSnackbar((prev) => ({ ...prev, open: true, severity: "success" }));
    } else {
      setLiveCount((prev) => prev - 1);
      setOpenSnackbar((prev) => ({ ...prev, open: true, severity: "error" }));
    }
    if (index <= 8) setIndex((prevIndex) => prevIndex + 1);
      else setOpenModal(true);
  };
  return (
    <>
      <QuizHeader score={score} liveCount={liveCount} />
      <div className="container">
        <Questions index={index} />
        <Answers handleCorrectAnswers={handleCorrectAnswers} />
      </div>
      <SimpleSnackbar open={openSnackbar} handleClose={handleClose} />
      <TransitionsModal
        score={score}
        open={openModal}
        liveCount={liveCount}
        index={index}
      />
    </>
  );
};

export default Quiz;
